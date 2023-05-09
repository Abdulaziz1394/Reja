console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");


// < 1 >. kirish code
app.use(express.static("public"));
app.use(express.json()); // json farmatni objecga kochirib beradi monosi
app.use(express.urlencoded({ extended: true })); // html da from request post qilsak express server qabul qilib boladi


// 2: Sessin

// < 3 > Views code
app.set("views", "views");
app.set("view engine", "ejs");

// < 4 > Routing code
app.get("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT} `);
});
