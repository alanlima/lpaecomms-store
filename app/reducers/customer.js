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
    loggedCustomerProfile: undefined,
    isEditMode: false
}

const CustomerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.LoadCustomer:
            return Object.assign({}, state, { loggedCustomerProfile: action.customer });
        default:
            return state;
    }
}

module.exports = CustomerReducer;