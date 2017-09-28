import React, { Component } from 'react'
import {
    // BrowserRouter as Router,
    Router,
    Route,
    Link
} from 'react-router-dom'

import NavBarContainer from 'containers/NavBarContainer'
import Menu from 'components/Menu'
import CatalogContainer from 'containers/CatalogContainer'
import CartBtnContainer from 'containers/CartBtnContainer'
import CartPageContainer from 'containers/CartPageContainer'
import CustomerContainer from 'containers/CustomerContainer'
import LogInContainer from 'containers/LogInContainer'
import CustomerProfileContainer from 'containers/CustomerProfileContainer'
import { AuthRoute, ProtectedRoutes } from 'components/RouterHelpers'
import ProtectedRouteContainer from 'containers/ProtectedRouteContainer'

class StoreApp extends Component {
    render(){
        return {
            
        }
    }
}