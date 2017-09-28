import { connect } from 'react-redux'
import CheckoutPage from 'components/CheckoutPage'
import CheckoutActions from 'actions/checkout-actions'

const mapStateToProps = (state, ownProps) => {
    return {
        customerProfile: state.Customer.loggedProfile,
        paymentOptions: [ 'PayPal', 'Visa', 'MasterCard', 'Direct Deposit' ],
        totalAmount: state.Cart.summary.totalPrice,
        items: state.Cart.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doPayment: (customerProfile, totalAmount, items, paymentChoosen) => {
            dispatch(CheckoutActions.createOrder(
                customerProfile,
                totalAmount,
                items,
                paymentChoosen
            ))
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    return Object.assign({}, ownProps, {
        customerProfile: stateProps.customerProfile,
        paymentOptions: stateProps.paymentOptions,
        doPayment: (paymentChoosen) => {
           dispatchProps.doPayment(
               stateProps.customerProfile,
               stateProps.totalAmount,
               stateProps.items,
               paymentChoosen
           )
        }
    })
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CheckoutPage)