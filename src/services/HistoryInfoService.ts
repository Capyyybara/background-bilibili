import BaseService from "./BaseService";
import { HistoryElementType } from "./type";
import { OkPacket } from "mysql";

class HistoryInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.history_info;
    }

    async addHistory(userId: number, content: string) {
        let sql = `insert into ${this.currentTable} (user_id, content) values (?, ?)`;
        return await this.executeSql(sql, [userId, content]) as OkPacket;
    }
}
export default HistoryInfoService;