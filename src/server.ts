import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainroutes from "./routes/index";

dotenv.config();

const server = express();

server.set("view engine", "musteche");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainroutes);

server.use((req, res) =>{
    res.send('page/404');
});

server.listen(process.env.PORT);


