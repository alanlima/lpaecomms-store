import React, { Component } from 'react'
import StoreApp from 'components/StoreApp'
import NavBar from 'components/NavBar'
// import CartButton from 'components/CartButton'
import Menu from 'components/Menu'
// import CatalogPage from 'components/CatalogPage'
import CatalogContainer from 'containers/CatalogContainer'
import CartBtnContainer from 'containers/CartBtnContainer'


class App extends Component {
    render() {
        return (
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

                <CatalogContainer />

            </div>
        )
    }
}

module.exports = App;