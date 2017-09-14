import actionTypes from 'actions/action-types'

const defaultState = {
    items: [],
    totalPrice: 0.0
}

const sumPrice = (items) => items.map(i => i.price).reduce((acc, curr) => acc + curr);

const Cart = (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.AddToCart:
            return {
                items: [...state.items, action.product],
                totalPrice: sumPrice([...state.items, action.product])
            }
        default:
            return state;
    }
}

module.exports = Cart;