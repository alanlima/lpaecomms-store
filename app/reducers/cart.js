import ActionTypes from 'actions/action-types'

const defaultState = {
    items: [
        // {productName: "StLab U-470 USB 2.0 to VGA Adapter", productId: 126, quantity: 1, amount: 42, total: 42} ,
        // {productName: "USB2.0 To Ethernet Adapter", productId: 127, quantity: 1, amount: 9, total: 9}
    ],
    summary: {
        itemsCount: 0,
        totalPrice: 0
    }
}

const sumPrice = (items) => items.length == 0 ? 0.0 : items.map(i => i.total).reduce((acc, curr) => acc + curr);

const Cart = (state = defaultState, action) => {
    switch(action.type){
        case ActionTypes.AddToCart:
            return Object.assign({}, state, {
                items: [...state.items, action.item]
            })
        case ActionTypes.RemoveProductFromCart:
            return Object.assign({}, state, {
                items: state.items.filter(item => item.productId !== action.productId)
            })
        case ActionTypes.UpdateProductQuantity:
            return Object.assign({}, state, {
                items: state.items.map(item => {
                    return item.productId !== action.productId 
                            ? item 
                            : Object.assign({}, item, {quantity: action.newQuantity, total: action.newTotal})
                })
            })
        case ActionTypes.UpdateCartSummary:
            return Object.assign({}, state, {
                summary: {
                    itemsCount: state.items.length,
                    totalPrice: sumPrice(state.items)
                }
            })
        case ActionTypes.OrderCreatedSuccessfully:
            return Object.assign({}, state, {
                items: [],
                summary: {
                    itemsCount: 0,
                    totalPrice: 0
                }
            })
        default:
            return state;
    }
}

module.exports = Cart;