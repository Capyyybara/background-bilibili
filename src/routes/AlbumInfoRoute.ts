import { OkPacket } from "mysql";
import ServiceFactory from "../ServiceFactory/ServiceFactory";
import Result from "../model/Result";
import express from "express";
const AblumInfoRoute = express.Router();

AblumInfoRoute.post("/addAlbum", async (req, res) => {
    let result = await ServiceFactory.AlbumInfoService.addAlbum(req.body.albumName, req.body.userId, req.body.albumData);
    if (result.affectedRows > 0) {
        res.send(new Result(true, null, "新增成功"));
    } else {
        res.send(new Result(true, null, "新增失败"));
    }
});

AblumInfoRoute.post("/getAllAlbum", async (req, res) => {
    let result = await ServiceFactory.AlbumInfoService.getAllAlbum(req.body.userId);
    if (result.length > 0) {
        res.send(new Result(true, result, "获取成功"));
    } else {
        res.send(new Result(true, result, "获取失败"));
    }
});

AblumInfoRoute.post("/deleteAlbum", async (req, res) => {
    let result = await ServiceFactory.AlbumInfoService.deleteAlbum(req.body.albumId) as OkPacket;
    if (result.affectedRows > 0) {
        res.send(new Result(true, null, "删除成功"));
    } else {
        res.send(new Result(true, null, "删除失败"));
    }
});

export default AblumInfoRoute;