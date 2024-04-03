import { OkPacket } from "mysql";
import ServiceFactory from "../ServiceFactory/ServiceFactory";
import Result from "../model/Result";
import express from "express";
const MusicInfoRoute = express.Router();

MusicInfoRoute.post("/addMusic", async (req, res) => {
    let result = await ServiceFactory.MusicInfoService.addMusic(req.body.aid, req.body.bvid, req.body.cid, req.body.duration, req.body.id, req.body.title, req.body.artwork, req.body.albumId);
    if (result.affectedRows > 0) {
        res.send(new Result(true, null, "增加歌单成功"));
    } else {
        res.send(new Result(false, null, "增加歌单失败"));
    }
});

export default MusicInfoRoute;