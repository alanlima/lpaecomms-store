import ActionTypes from 'actions/action-types'

const defaultState = {
    isUserAuthenticated: false,
    isSessionRehydrated: false,
}

const SessionReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'persist/REHYDRATE':
            return Object.assign({}, state, { isSessionRehydrated: true, isUserAuthenticated: action.payload.Session.isUserAuthenticated });
        case ActionTypes.CustomerLogInSuccessfull:
        case ActionTypes.CustomerProfileLoaded:
            return Object.assign({}, state, { isUserAuthenticated: true });
        case ActionTypes.CustomerLogout: 
            return Object.assign({}, state, { isUserAuthenticated: false });
        default:
            return state;
    }
}

module.exports = SessionReducer