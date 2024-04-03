import BaseService from "./BaseService";

class MusicHistoryInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.music_history_info;
    }
    async addMusicHistory(aid: number, bvid: string, cid: number, duration: number, id: number, title: string, artwork: string) {
        let sql = `insert into ${this.currentTable} (aid,bvid,cid,duration,id,title,artwork) values (?,?,?,?,?,?,?)`;
        return await this.executeSql(sql, [aid, bvid, cid, duration, id, title, artwork]);
    }
    async getAllMusicHistory(userId: number) {
        let sql = `select * from ${this.currentTable} where userId = ${userId}`;
        return await this.executeSql(sql, [userId]);
    }
}

export default MusicHistoryInfoService;