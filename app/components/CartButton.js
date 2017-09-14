import React, { Component } from 'react'
import PropTypes from 'prop-types'

const CartButton = (props) => {
    return (
        <div className="shopping-item">
            <a href='#'>
                Cart -&nbsp;
                <span className="cart-amunt">
                    $ {props.amount}
                </span>
                <i className="fa fa-shopping-cart"></i>
                <span className="product-count">
                    {props.productCount}
                </span>
            </a>
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