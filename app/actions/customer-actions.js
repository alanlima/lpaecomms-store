import ActionTypes from './action-types'
import webApi from 'api/webapi'
import navigationActions from './navigation-actions'

const registerCustomer = (newCustomer, nextAction = () => { }) => {
    return dispatch => {
        return webApi
                .registerCustomer(newCustomer)
                .then((result) => {
                    dispatch({type: ActionTypes.CustomerSavedSuccessfully, result})
                    // nextAction()
                    dispatch(loadCustomerProfile(result.customerId))
                        .then(() => dispatch(navigationActions.goToHome()))
                })
    }
}

const logIn = (login, password, redirectTo, nextAction = () => {}) => {
    return dispatch => {
        return webApi
                .authenticate(login, password)
                .then((result) => {
                    if(result.authenticated) {
                        dispatch({
                            type: ActionTypes.CustomerLogInSuccessfull,
                            customerId: result.customerId
                        })

                        dispatch(loadCustomerProfile(result.customerId))
                            .then(() => dispatch(navigationActions.goTo(redirectTo)))
                    } else {
                        dispatch({
                            type: ActionTypes.CustomerLogInFail,
                        })
                    }
                })
    }
}

const loadCustomerProfile = (id) => {
    return dispatch => {
        return webApi
                .loadCustomerProfile(id)
                .then(result => {
                    dispatch({
                        type: ActionTypes.CustomerProfileLoaded,
                        customer: result
                    })
                })
    }
}

const doLogout = () => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CustomerLogout
        })
        dispatch(navigationActions.goToHome());
    }
}

module.exports = {
    registerCustomer,
    registerCustomerAndGoToHome: (newCustomer) => dispatch => {
        registerCustomer(newCustomer,
            () => dispatch(navigationActions.goToHome())
        )(dispatch);
    },
    logIn,
    doLogout
}