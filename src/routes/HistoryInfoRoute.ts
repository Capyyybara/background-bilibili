import ServiceFactory from "../ServiceFactory/ServiceFactory";
import Result from "../model/Result";
import express from "express";
const HistoryInfoRoute = express.Router();

HistoryInfoRoute.post("/addHistory", async (req, res) => {
    let result = await ServiceFactory.historyInfoService.addHistory(req.body.userId, req.body.content);
    if (result.affectedRows > 0) {
        res.send(new Result(true, null, "新增成功"));
    } else {
        res.send(new Result(true, null, "新增失败"));
    }

});

export default HistoryInfoRoute;