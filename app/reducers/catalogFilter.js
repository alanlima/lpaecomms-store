import ActionTypes from 'actions/action-types'

module.exports = (state = { textFilter: '' }, action) => {
    switch(action.type) {
        case ActionTypes.SetTextFilter:
            return Object.assign({}, state, { textFilter: action.text });
        default:
            return state;
    }
}