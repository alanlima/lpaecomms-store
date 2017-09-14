import actions from './action-types'

module.exports = (product) => {
    return dispatch => {
        dispatch({
            type: actions.AddToCart,
            product: product
        })
    }
}