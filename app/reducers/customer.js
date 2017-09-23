import ActionTypes from 'actions/action-types'

const defaultCustomer = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    password: '',
    login: ''
}

const defaultState = {
    loggedProfile: null,
    isEditMode: false,
    loggedCustomerId: 0
}

const CustomerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.CustomerProfileLoaded:
            return Object.assign({}, state, { loggedProfile: action.customer })
        case ActionTypes.CustomerLogInSuccessfull:
            return Object.assign({}, state, { loggedCustomerId: action.customerId })
        default:
            return state;
    }
}

module.exports = CustomerReducer;