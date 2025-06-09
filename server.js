const mongodb = require("mongodb");
const http = require("http");

let db;
const connectionString = "mongodb+srv://Dennis:DennisMongoDBAtlasParoli$@cluster0.rcohluw.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) {
        console.log("ERROR on connection MongoDB");
    } else {
        console.log("MongoDB connection succeed");
        db = client.db();
        
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});