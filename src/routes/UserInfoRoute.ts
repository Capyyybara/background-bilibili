import ServiceFactory from "../ServiceFactory/ServiceFactory";
import Result from "../model/Result";
import express from "express";
const UserInfoRouter = express.Router();

/**
 * 登录路由
 */
UserInfoRouter.post("/login", async (req, res) => {
    /**
     * 查询用户信息
     */
    let result = await ServiceFactory.userInfoService.getUserInfo(req.body.username! as string, req.body.password! as string);
    //数据大于0则代表用户存在
    if (result.length > 0) {
        res.send(JSON.stringify(new Result(true, result[0], "登陆成功")));
    } else {
        res.send(JSON.stringify(new Result(false, null, "登陆失败")));
    }
});
/**
 * 用户注册
 */
UserInfoRouter.post("/signUp", async (req, res) => {
    /**
     * 邮箱是否被注册
     */
    if ((await ServiceFactory.userInfoService.findByEmail(req.body.email! as string)).length > 0) {
        res.send(JSON.stringify(new Result(false, null, "邮箱重复")));
    } else {
        await ServiceFactory.userInfoService.addUser(req.body.email! as string, req.body.password! as string);
        res.send(JSON.stringify(new Result(true, null, "注册成功")));
    }
});
/**
 * 收货地址的更改
 */
UserInfoRouter.post("/updateAddress", async (req, res) => {
    // 更改收货地址
    let result = await ServiceFactory.userInfoService.updateAddress(req.body.userId! as string, req.body.address! as string);
    // 查看被影响的行数是否大于0
    if (result.affectedRows > 0) {
        res.send(JSON.stringify(new Result(true, null, "更改成功")));
    } else {
        res.send(JSON.stringify(new Result(false, null, "更改失败")));
    }
});




export default UserInfoRouter;