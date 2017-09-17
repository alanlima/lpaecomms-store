import { connect } from 'react-redux'
import { registerCustomer } from 'actions/customer-actions'
import CustomerProfileEdit from 'components/CustomerProfileEdit'

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        registerCustomer: (newCustomer) => {
            dispatch(registerCustomer(newCustomer));
        }
    }
}

const NewCustomerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerProfileEdit)

module.exports = NewCustomerContainer