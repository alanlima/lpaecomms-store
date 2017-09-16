import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageTitle from 'components/PageTitle'

const CartItem = (props) => {
    return (
        <tr className="cart_item">
            <td><a href="#" title="Remove this item" className="remove">x</a></td>
            <td><a href="#">{props.item.productName}</a></td>
            <td><span className="amount">{props.item.amount}</span></td>
            <td>
                <div className="quantity buttons_added">
                    <input type="button" className="minus" value="-" />
                    <input type="number" 
                           size="4" 
                           className="input-text qty text" 
                           title="Qty" min="0" sep="0"
                           value={props.item.quantity} />
                    <input type="button" className="plus" value="+" />
                </div>
            </td>
            <td><span className="amount">{props.item.total}</span></td>
        </tr>
    )
}

const CartTable = (props) => {
    return (
        <table cellSpacing="0" className="shop_table cart">
            <thead>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </thead>
            <tbody>
                <tr>
                    {props.items.map(item => <CartItem item={item} />)}
                </tr>
            </tbody>
        </table>
    )
}

class CartPage extends Component
{
    render() {
        return (
            <div>
                <PageTitle title='Cart' />
                <div style={{padding: "80px 0 130px"}}> 
                    <div className="container">
                        <div className="row">
                            <CartTable items={this.props.items} />
                        </div>
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = CartPage