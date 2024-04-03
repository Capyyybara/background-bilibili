import express from "express";
import http from "http";
import bodyParser from "body-parser";
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, resp, next) => {
//     resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     resp.setHeader("Access-Control-Allow-Origin", "*");
//     resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//     next();
// });


import UserInfoRouter from "./routes/UserInfoRoute";
app.use("/userInfo", UserInfoRouter);

import HistoryInfoRoute from "./routes/HistoryInfoRoute";
app.use("/historyInfo", HistoryInfoRoute);

import AlbumInfoRoute from "./routes/AlbumInfoRoute";
app.use("/albumInfo", AlbumInfoRoute);

import MusicHistoryRoute from "./routes/MusicHistoryRoute";
app.use("/musicHistoryInfo", MusicHistoryRoute);

import MusicInfoRoute from "./routes/MusicInfoRoute";
app.use("/musicInfo", MusicInfoRoute);

server.listen(8080, () => {
    console.log(`Server started at http://localhost:8080`);
});