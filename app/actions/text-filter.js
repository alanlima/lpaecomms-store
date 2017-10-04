import ActionTypes from 'actions/action-types'

module.exports = {
    SetTextFilter: (text) => {
        return dispatch => {
            dispatch({
                type: ActionTypes.SetTextFilter,
                text
            })
        }
    }
}