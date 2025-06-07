/*  Express.js Frameworki



console.log("web Serverni boshlash");
 
const express = require("express");
const app = express();  // Express kutubxonasini chaqirish ya'ni APP belgisini quysay bizga expressni APP objecktini chaqirib beradi.
 const http = require("http");

 //express web servesi 4-ga bulinadi

 // 1)Kirish code

 app.use(express.static("public")); //har qandfay brauzerdan kirib kelgan zaproslar uchun public folderi ochiq degan ma'noni anglatadi.
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 // 2: Session code

 // 3: Views code
 app.set("views", "views");
 app.set("view engine", "ejs");

 // 4: Routing code  //Routing - bu serverga kelgan so'rovlarni qaysi yo'lga yuborishni belgilaydi. Masalan, GET, POST, PUT, DELETE so'rovlarini qayta ishlash uchun ishlatiladi.
 app.get("/hello", function (req, res) {
     res.end("<h1>HELLO WORLD</h1>");
 });

 app.get("/gift", function (req, res) {
     res.end("<h1>Siz sovgalar bolimidasiz</h1>");
 });

 const server = http.createServer(app);
 let PORT = 3000;

 server.listen(PORT, function () {
     console.log(`The server is running successfully on port: ${PORT}`);
});
*/




// EJS Frameworki



 /*
 console.log("web Serverni boshlash");

 const express = require("express");
 const app = express();  // Express kutubxonasini chaqirish ya'ni APP belgisini quysay bizga expressni APP objecktini chaqirib beradi.
 const http = require("http");

 //express web servesi 4-ga bulinadi

 // 1)Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2:Session code
// 3:Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4:Routing code
app.post("/create-item", (req, res) => {
    // TODO: code with db here
});

app.get("/", function (req, res) {
    res.render("index");
});

const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
*/




// EJS Frameworkda Portfolio publishing qilamiz.

console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        Console.log("ERROR:", err);
    } else {
        user = JSON.parse(data); // JSON ma'lumotlarini o'qish yoki ulash
    }
    });

// Express web servesi 4-ga bo'linadi

// 1) Kirish code
app.use(express.static("public")); // Static fayllar uchun public folderni ochiq qilish
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// (Session kodlari qo'shilmagan, kerak bo'lsa keyinchalik qo'shishingiz mumkin)

// 3: Views code
app.set("views", "views"); // Views papkasini belgilash
app.set("view engine", "ejs"); // EJS ni view engine sifatida belgilash

// 4: Routing code
app.post("/create-item", (req, res) => {
    // TODO: Ma'lumotlar bazasi bilan ishlash kodini qo'shing
});

app.get('/author', (req, res) => {
            res.render("author", { user: user }); // `author.ejs` fayliga ma'lumotlarni yuborish
        });

app.get("/", function (req, res) {
    res.render("harid"); // Bosh sahifa uchun `harid.ejs` faylini render qilish
});

// Serverni yaratish va portni belgilash
const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});