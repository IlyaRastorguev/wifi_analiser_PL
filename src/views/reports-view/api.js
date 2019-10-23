import Connector from '../../connector'

export default {
    reports: () => `${Connector.getHost()}/wifi-analyzer/api/v1/report`
}
