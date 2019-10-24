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

export default {
    inputHandler
}