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

const logIn = (login, password, returnUrl, nextAction = () => {}) => {
    return dispatch => {
        return webApi
                .authenticate(login, password)
                .then((result) => {
                    if(result.authenticated) {
                        dispatch({
                            type: ActionTypes.CustomerLogInSuccessfull,
                            customerId: result.customerId
                        })

                        dispatch(navigationActions.goTo(returnUrl));
                    } else {
                        dispatch({
                            type: ActionTypes.CustomerLogInFail,
                        })
                    }
                })
    }
}

module.exports = {
    registerCustomer,
    registerCustomerAndGoToHome: (newCustomer) => dispatch => {
        registerCustomer(newCustomer,
            () => dispatch(navigationActions.goToHome())
        )(dispatch);
    },
    logIn
}