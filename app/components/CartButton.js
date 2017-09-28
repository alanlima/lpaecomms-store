import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CartButton = (props) => {
    return (
        <div className="shopping-item">
            <Link to="/cart">
                Cart -&nbsp;
                <span className="cart-amunt">
                    $ {props.amount}
                </span>
                <i className="fa fa-shopping-cart"></i>
                <span className="product-count">
                    {props.productCount}
                </span>
            </Link>
        </div>
    )
}

CartButton.propTypes = {
    amount: PropTypes.number.isRequired,
    productCount: PropTypes.number.isRequired
}

CartButton.defaultProps = {
    amount: 0.0,
    productCount: 0
}

module.exports = CartButton