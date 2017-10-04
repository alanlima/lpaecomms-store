import { combineReducers } from 'redux'
import Catalog from './catalog'
import Cart from './cart'
import Customer from './customer'
import Session from './session'
import CatalogFilter from './catalogFilter'
import { routerReducer } from 'react-router-redux'

const app = combineReducers({
    Catalog,
    Cart,
    Customer,
    routing: routerReducer,
    Session,
    CatalogFilter
})

module.exports = app;