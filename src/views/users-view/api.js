import connector from "../../connector";

export default {
    getList: () => `${connector.getHost()}/wifi-analyzer/api/v1/user`,
    getMe: () => `${connector.getHost()}/wifi-analyzer/api/v1/user/me`
}
