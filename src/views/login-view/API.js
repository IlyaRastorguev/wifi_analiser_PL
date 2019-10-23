import Connector from '../../connector'

const TOKENS = {};
//API
export default {
    OAuth: () => `${Connector.getHost()}/wifi-analyzer/api/oauth/token`,
    auth: Symbol('auth'),
    refresh: Symbol('refresh'),
    setTokens: (key, value) => TOKENS[key] = value,
    getToken: (key) => TOKENS[key]
}
