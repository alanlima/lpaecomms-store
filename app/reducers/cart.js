import actionTypes from 'actions/action-types'

const defaultState = {
    items: [
        {productName: "StLab U-470 USB 2.0 to VGA Adapter", productId: 126, quantity: 1, amount: 42, total: 42} ,
        {productName: "USB2.0 To Ethernet Adapter", productId: 127, quantity: 1, amount: 9, total: 9}
    ],
    totalPrice: 0.0
}

const sumPrice = (items) => items.map(i => i.amount).reduce((acc, curr) => acc + curr);

const Cart = (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.AddToCart:
            return {
                items: [...state.items, action.item],
                totalPrice: sumPrice([...state.items, action.item])
            }
        default:
            return state;
    }
}

module.exports = Cart;