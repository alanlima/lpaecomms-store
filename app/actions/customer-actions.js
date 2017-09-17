import ActionTypes from './action-types'
import webApi from 'api/webapi'

const registerCustomer = (newCustomer) => {
    return dispatch => {
        return webApi
                .registerCustomer(newCustomer)
                .then((result) => dispatch({type: ActionTypes.CustomerSavedSuccessfully, result}))
    }
}

module.exports = {
    registerCustomer
}