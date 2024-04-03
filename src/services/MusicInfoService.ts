import BaseService from "./BaseService";

class MusicInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.music_info;
    }
    async addMusic(aid: number, bvid: string, cid: number, duration: number, id: number, title: string, artwork: string, albumId: number) {
        let sql = `insert into ${this.currentTable} (aid,bvid,cid,duration,id,title,artwork,album_id) values (?,?,?,?,?,?,?,?)`;
        return await this.executeSql(sql, [aid, bvid, cid, duration, id, title, artwork, albumId]);
    }
}

export default MusicInfoService;