import actions from './action-types'

module.exports = (product, quantity = 1) => {
    return dispatch => {
        dispatch({
            type: actions.AddToCart,
            item: {
                productName: product.name,
                productId: product.id,
                quantity,
                amount: product.price,
                total: quantity * product.price
            }
        })
    }
}