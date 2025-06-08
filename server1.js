/*// Express web servesi 4-ga bo'linadi

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
});*/