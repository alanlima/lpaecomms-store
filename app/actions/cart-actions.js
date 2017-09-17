import actions from './action-types'

const addToCart = (product, quantity = 1) => {
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

const addToCartAndUpdateSummary = (product, quantity = 1) => {
    return dispatch => {
        addToCart(product, quantity)(dispatch);
        updateCartSummary()(dispatch);
    }
}

const updateQuantity = (item, newQuantity) => {
    return dispatch => {
        dispatch({
            type: actions.UpdateProductQuantity,
            productId: item.productId,
            newQuantity,
            newTotal: item.amount * newQuantity
        })
    }
}

const updateQuantityAndSummary = (item, newQuantity) => {
    return dispatch => {
        updateQuantity(item, newQuantity)(dispatch);
        updateCartSummary()(dispatch);
    }
}

const removeProduct = (productId) => {
    return dispatch => {
        dispatch({
            type: actions.RemoveProductFromCart,
            productId
        })
    }
}

const removeProductAndUpdateSummary = (productId) => {
    return dispatch => {
        removeProduct(productId)(dispatch)
        updateCartSummary()(dispatch)
    }
}

const updateCartSummary = () => {
    return dispatch => {
        dispatch({
            type: actions.UpdateCartSummary
        })
    }
}

module.exports = {
    addToCart,
    addToCartAndUpdateSummary,

    updateQuantity,
    updateQuantityAndSummary,

    removeProduct,
    removeProductAndUpdateSummary,

    updateCartSummary,
}

