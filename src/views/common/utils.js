import UserUtils from '../users-view/utils'

const permissions = {
    ROLE_ANALYZER: new Set(['view']),
    ROLE_ADMIN: new Set(['add-users', 'delete-users', 'add-locations', 'delete-locations', 'delete-reports'])
};

function inputHandler(event, regexp) {
    if (event && event.target && event.target.value) {
        return {
            value: event.target.value,
            isValid: regexp ? event.target.value.match(regexp) : true
        }
    }

    return {
        value: '',
        isValid: false
    }
}

function roleModelHandler(features, callback) {
    const role = UserUtils.getMe()((user) => {
        const userPermissions = {};
        features.forEach((item)=> userPermissions[item] = permissions[user['authorities'].join()].has(item));

        callback(userPermissions)
    });
}

export default {
    inputHandler,
    roleModelHandler
}