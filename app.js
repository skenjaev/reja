console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();



// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

app.post("/create-item", async (req, res) => {
    try {
        console.log("user entered /create-item");
        const new_reja = req.body.item;
        
        if (!new_reja || new_reja.trim() === "") {
            return res.status(400).send("Reja bo'sh bo'lishi mumkin emas!");
        }
        
        // MongoDB 6.x uchun async/await usuli
        const result = await global.db.collection("plans").insertOne({ 
            reja: new_reja.trim(),
            createdAt: new Date()
        });
        
        console.log("Yangi reja qo'shildi:", result.insertedId);
        res.redirect("/");
        
    } catch (err) {
        console.log("Create item error:", err);
        res.status(500).send("Xatolik yuz berdi!");
    }
});

app.get("/", async function (req, res) {
    try {
        console.log("user entered /");
        
        // MongoDB 6.x uchun async/await usuli
        const data = await global.db.collection("plans").find().toArray();
        
        res.render("reja", { items: data });
        
    } catch (err) {
        console.log("Get items error:", err);
        res.status(500).send("Ma'lumotlarni yuklashda xatolik!");
    }
});

// Edit item route
app.post("/edit-item", async (req, res) => {
    try {
        const { id, newValue } = req.body;
        
        if (!newValue || newValue.trim() === "") {
            return res.status(400).send("Yangi qiymat bo'sh bo'lishi mumkin emas!");
        }
        
        const { ObjectId } = require("mongodb");
        await global.db.collection("plans").findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { reja: newValue.trim() } }
        );
        
        res.send("successfully updated");
        
    } catch (err) {
        console.log("Edit error:", err);
        res.status(500).send("O'zgartirishda xatolik!");
    }
});

// Delete item route
app.post("/delete-item", async (req, res) => {
    try {
        const { id } = req.body;
        
        const { ObjectId } = require("mongodb");
        await global.db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id)}, function(err,data) {
            res.json({state: "success"});
        }
    );
        
        res.send("successfully deleted");
        
    } catch (err) {
        console.log("Delete error:", err);
        res.status(500).send("O'chirishda xatolik!");
    }
});

// Clean all items route
app.post("/clean-all-items", async (req, res) => {
    try {
        await global.db.collection("plans").deleteMany({});
        res.send("successfully cleaned");
        
    } catch (err) {
        console.log("Clean all error:", err);
        res.status(500).send("Tozalashda xatolik!");
    }
});

module.exports = app;