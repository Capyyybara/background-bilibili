import DBUtils from "../utils/DBUtils";

class BaseService extends DBUtils {
    /**
     * 数据的表路由
     */
    tableMap;
    /**
     * 当前调用表
     * 后面需要哪张表就设置哪张表
     */
    currentTable = "";
    constructor() {
        super();
        this.tableMap = {
            user_info: "user_info",
            history_info: "history_info",
            album_info: "album_info",
            music_history_info: "music_history_info",
            music_info: "music_info"
        };
    }
}

export default BaseService;