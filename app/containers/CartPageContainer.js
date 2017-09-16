import { connect } from 'react-redux'
import CartPage from 'components/CartPage'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.Cart.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const CartPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage)

module.exports = CartPageContainer