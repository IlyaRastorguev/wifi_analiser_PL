import Connector from '../../connector'
//API
export default {
    getLocations: () => `${Connector.getHost()}/wifi-analyzer/api/v1/location`
}
