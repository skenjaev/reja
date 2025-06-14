console.log("Web Serverni boshlash");
const express = require("express");
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
        const result = await global.db.collection("plans").deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
            res.json({ state: "success" });
        } else {
            res.status(404).json({ state: "error", message: "Element topilmadi!" });
        }

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


// Delete all operatsiyasi
app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany({}, function(err, result) {
            if (err) {
                console.log(err);
                res.json({ state: "Xatolik yuz berdi" });
            } else {
                res.json({ state: "Hamma rejalar o'chirildi" });
            }
        });
    }
});

// Asosiy sahifa
app.get("/", function(req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", { items: data });
        }
    });
});