import { connect } from 'react-redux'
import CartButton from 'components/CartButton'

const mapStateToProps = (state, ownProps) => {
    return {
        productCount: state.Cart.summary.itemsCount,
        amount: state.Cart.summary.totalPrice
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

const CartBtnContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartButton)

module.exports = CartBtnContainer