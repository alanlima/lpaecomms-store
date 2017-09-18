import ActionTypes from './action-types'
import webApi from 'api/webapi'
import navigationActions from './navigation-actions'

const registerCustomer = (newCustomer, nextAction = () => { }) => {
    return dispatch => {
        return webApi
                .registerCustomer(newCustomer)
                .then((result) => {
                    dispatch({type: ActionTypes.CustomerSavedSuccessfully, result})
                    nextAction()
                })
    }
}

module.exports = {
    registerCustomer,
    registerCustomerAndGoToHome: (newCustomer) => dispatch => {
        registerCustomer(newCustomer,
            () => dispatch(navigationActions.goToHome())
        )(dispatch);
    }
}