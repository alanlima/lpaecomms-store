import { connect } from 'react-redux'
import CartPage from 'components/CartPage'
import {
    removeProductAndUpdateSummary as removeProduct,
    updateQuantityAndSummary as updateQuantity
} from 'actions/cart-actions'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.Cart.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeProduct: (productId) => dispatch(removeProduct(productId)),
        updateQuantity: (productId, quantity) => dispatch(updateQuantity(productId, quantity))
    }
}

const CartPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage)

module.exports = CartPageContainer