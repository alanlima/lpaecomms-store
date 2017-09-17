import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageTitle from 'components/PageTitle'

const CartItem = (props) => {
    const { item } = props;
    return (
        <tr className="cart_item">
            <td><a href="#" title="Remove this item" className="remove" onClick={() => props.removeProduct(item.productId)}>x</a></td>
            <td><a href="#">{item.productName}</a></td>
            <td><span className="amount">{item.amount}</span></td>
            <td>
                <div className="quantity buttons_added">
                    <input type="button" 
                        className="minus" 
                        value="-"
                        disabled={item.quantity === 1}
                        onClick={() => props.updateQuantity(item, item.quantity - 1)} />
                    <input type="number" 
                           size="4" 
                           className="input-text qty text" 
                           title="Qty" min="0" step="0"
                           readOnly
                           value={item.quantity} />
                    <input type="button" className="plus" value="+" onClick={() => props.updateQuantity(item, item.quantity + 1)} />
                </div>
            </td>
            <td><span className="amount">{item.total}</span></td>
        </tr>
    )
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired
}

// const CartTableTotal = (props) => {
//     return (
        
//     )
// }

// const CartTableActions = (props) => {
//     return (

//     )
// }

const CartTable = (props) => {
    return (
        <table cellSpacing="0" className="shop_table cart">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(item => <CartItem 
                                            key={item.productId} 
                                            item={item}
                                            updateQuantity={props.onUpdateQuantity}
                                            removeProduct={props.onRemoveProduct} />)}
            </tbody>
        </table>
    )
}

CartTable.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired
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
                            <CartTable 
                                items={this.props.items}
                                onUpdateQuantity={this.props.updateQuantity}
                                onRemoveProduct={this.props.removeProduct} />
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