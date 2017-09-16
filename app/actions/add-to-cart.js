import actions from './action-types'

module.exports = (product) => {
    return dispatch => {
        dispatch({
            type: actions.AddToCart,
            item: {
                productName: product.name,
                productId: product.id,
                quantity: 1,
                amount: product.price,
                total: 1 * product.price
            }
        })
    }
}