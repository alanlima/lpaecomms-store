import { combineReducers } from 'redux'
import Catalog from './catalog'
import Cart from './cart'

const app = combineReducers({
    Catalog,
    Cart
})

module.exports = app;