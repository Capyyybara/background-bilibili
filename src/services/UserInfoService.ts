import BaseService from "./BaseService";
import { UserElementType } from "./type";
import mysql from "mysql";

/**
 * 用户服务的集合
 */
class UserInfoService extends BaseService {
    constructor() {
        super();
        /**
         * 将当前表设置为用户表
         */
        this.currentTable = this.tableMap.user_info;
    }
    /**
     * 用户添加
     * @param email 邮箱
     * @param password 密码
     */
    async addUser(email: string, password: string) {
        let sql = `INSERT INTO ${this.currentTable} (email, password) VALUES (?,?);`;
        return await this.executeSql(sql, [email, password]) as mysql.OkPacket;
    }
    /**
     * 查询用户信息
     * @param email 用户邮箱
     * @param password 用户密码
     * @returns {UserElementType} 返回用户信息
     */
    async getUserInfo(email: string, password: string): Promise<Array<UserElementType>> {
        let sql = `select * from ${this.currentTable} where username = ? and password = ?`;
        return await this.executeSql(sql, [email, password]) as Array<UserElementType>;
    }
    async findByEmail(email: string) {
        return await this.executeSql(`select * from ${this.currentTable} where email = ?`, [email]) as Array<any>;
    }
    async updateAddress(userId: string, address: string) {
        return await this.executeSql(`update ${this.currentTable} set address = ? where userId = ?`, [address, userId]) as mysql.OkPacket;
    }

}

export default UserInfoService;