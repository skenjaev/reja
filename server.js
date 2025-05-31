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