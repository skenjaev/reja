const { MongoClient } = require("mongodb");
const http = require("http");

let db;
const connectionString = "mongodb+srv://Dennis:DennisMongoDBAtlasParoli$@cluster0.rcohluw.mongodb.net/Reja?retryWrites=true&w=majority";

// MongoDB 6.x uchun yangi ulanish usuli
async function connectDB() {
    try {
        const client = new MongoClient(connectionString);
        await client.connect();
        
        console.log("MongoDB connection succeed");
        db = client.db("Reja");
        
        // Database ni global qilish
        global.db = db;
        
        // Express app ni yuklash va serverni ishga tushirish
        const app = require("./app");
        const server = http.createServer(app);
        const PORT = process.env.PORT || 3007;
        
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
        
    } catch (err) {
        console.log("ERROR on connection MongoDB:", err);
        process.exit(1);
    }
}

// Database ulanishini boshlash
connectDB();