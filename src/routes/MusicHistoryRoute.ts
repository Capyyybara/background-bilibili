import ServiceFactory from "../ServiceFactory/ServiceFactory";
import Result from "../model/Result";
import { OkPacket } from "mysql";
import express from "express";
const MusicHistoryRoute = express.Router();

MusicHistoryRoute.post("/addMusicHistory", async (req, res) => {
    let result = await ServiceFactory.MusicHistoryInfoService.addMusicHistory(req.body.aid, req.body.bvid, req.body.cid, req.body.duration, req.body.id, req.body.title, req.body.artwork) as OkPacket;
    if (result.affectedRows > 0) {
        res.send(new Result(true, null, "新增历史成功"));
    } else {
        res.send(new Result(false, null, "新增历史失败"));
    }
});

MusicHistoryRoute.post("/getAllMusicHisotry", async (req, res) => {
    let result = await ServiceFactory.MusicHistoryInfoService.getAllMusicHistory(req.body.userId);
    if (result.length > 0) {
        res.send(new Result(true, null, "获取播放历史成功"));
    } else {
        res.send(new Result(false, null, "获取播放历史失败"));
    }
});

export default MusicHistoryRoute;