// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// http.createServer(function (req, res) {
//     const q = url.parse(req.url, true);
//     let filename = "." + q.pathname+".html";
//     if(q.href == "/"){
//         filename = "./index.html"
//     }
//     else if(filename != "./index.html"&& filename != "./about.html"&& filename != "./contact-me.html"&& filename != "./404.html"){
//         filename = "./404.html"
//     }
//     fs.readFile(filename, function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile("./index.html",{root: __dirname }));
app.get("/index", (req, res) => res.sendFile("./index.html",{root: __dirname }));
app.get("/about", (req, res) => res.sendFile("./about.html",{root: __dirname }));
app.get("/contact-me", (req, res) => res.sendFile("./contact-me.html",{root: __dirname }));
app.get("*", (req, res) => res.sendFile("./404.html",{root: __dirname }));//error


const PORT = 3000;
app.listen(PORT, () => {
});