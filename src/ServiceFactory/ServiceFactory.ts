import UserInfoService from "../services/UserInfoService";
import HistoryInfoService from "../services/HistoryInfoService";
import AlbumInfoService from "../services/AlbumInfoService";
import MusicHistoryInfoService from "../services/MusicHistoryInfoService";
import MusicInfoService from "../services/MusicInfoService";

const ServiceFactory = Object.freeze({
    get userInfoService() {
        return new UserInfoService();
    },
    get historyInfoService() {
        return new HistoryInfoService();
    },
    get AlbumInfoService() {
        return new AlbumInfoService();
    },
    get MusicHistoryInfoService() {
        return new MusicHistoryInfoService();
    },
    get MusicInfoService() {
        return new MusicInfoService();
    }
});

export default ServiceFactory;