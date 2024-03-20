import UserInfoService from "../services/UserInfoService";
import HistoryInfoService from "../services/HistoryInfoService";

const ServiceFactory = Object.freeze({
    get userInfoService() {
        return new UserInfoService();
    },
    get historyInfoService() {
        return new HistoryInfoService();
    }
});

export default ServiceFactory;