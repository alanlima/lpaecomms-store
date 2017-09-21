import React, { Component } from 'react'
import {
    // BrowserRouter as Router,
    Router,
    Route,
    Link
} from 'react-router-dom'

import StoreApp from 'components/StoreApp'
import NavBar from 'components/NavBar'
import Menu from 'components/Menu'
import CatalogContainer from 'containers/CatalogContainer'
import CartBtnContainer from 'containers/CartBtnContainer'
import CartPageContainer from 'containers/CartPageContainer'
import CustomerContainer from 'containers/CustomerContainer'

class App extends Component {
    render() {
        return (
            <Router history={this.props.history}>
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
                <Route path="/customer/new" component={CustomerContainer} />
                <Route path="/customer/edit" component={CustomerContainer} />
            </div>
            </Router>
        )
    }
}

module.exports = App;