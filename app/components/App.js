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
import CheckoutContainer from 'containers/CheckoutContainer'

class App extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <div>
                    <NavBarContainer title="LPA - eComms" />

                    <div className="site-branding-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    LPA - eComms
                                </div>
                                <div className="col-sm-6">
                                    <CartBtnContainer />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Menu />
                    <Route exact path="/" component={CatalogContainer} />
                    <Route exact path="/cart" component={CartPageContainer} />
                    <Route path="/customer/new" component={CustomerContainer} />
                    <Route path="/customer/edit" component={CustomerContainer} />
                    <Route path="/login" component={LogInContainer} />
                    <Route path="/customer/profile" component={CustomerProfileContainer} /> 
                    <Route exact path="/checkout" component={CheckoutContainer} />
                    <Route exact path="/checkout/:invoiceId" component={CheckoutContainer} />

                    {/* <ProtectedRoutes
                        loginUrl="/login"
                        isAuthenticated={this.props.isAuthenticated}>
                        <Route path="/customer/profile" component={CustomerProfileContainer} /> 
                    </ProtectedRoutes> */}
                </div>
            </Router>
        )
    }
}

module.exports = App;