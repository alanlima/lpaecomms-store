import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import StoreApp from 'components/StoreApp'
import NavBar from 'components/NavBar'
import Menu from 'components/Menu'
import CatalogContainer from 'containers/CatalogContainer'
import CartBtnContainer from 'containers/CartBtnContainer'
import CartPageContainer from 'containers/CartPageContainer'
import NewCustomerContainer from 'containers/NewCustomerContainer'


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar title="LPA - eComms" />

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
                    <Route path="/customer/new" component={NewCustomerContainer} />
                </div>
            </Router>
        )
    }
}

module.exports = App;