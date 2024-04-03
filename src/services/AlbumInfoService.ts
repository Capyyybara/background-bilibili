import BaseService from "./BaseService";
import { OkPacket } from "mysql";

class AlbumInfoService extends BaseService {
    constructor() {
        super();
        this.currentTable = this.tableMap.album_info;
    }
    async findByBvid(bvid: string) {
        let sql = `select count(*) from ${this.currentTable} where album_bvid = ?`;
        return await this.executeSql(sql, [bvid]);
    }
    async addAlbum(albumName: string, userId: number, albumData: string | null) {
        if (albumData) {
            let albumObj = JSON.parse(albumData);
            let sql = `insert into ${this.currentTable} (album_name,user_id,album_data,album_bvid) values (?,?,?,?)`;
            return await this.executeSql(sql, [albumName, userId, albumData, albumObj.bvid]) as OkPacket;
        } else {
            let sql = `insert into ${this.currentTable} (album_name,user_id) values (?,?)`;
            return await this.executeSql(sql, [albumName, userId, albumData]) as OkPacket;
        }
    }
    async getAllAlbum(userId: number) {
        let sql = `select * from ${this.currentTable} where user_id = ?`;
        return await this.executeSql(sql, [userId]);
    }
    async deleteAlbum(albumId: number) {
        let sql = `delete from ${this.currentTable} where album_id = ?`;
        return await this.executeSql(sql, [albumId]);
    }
}

export default AlbumInfoService;