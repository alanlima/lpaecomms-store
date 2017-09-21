import { connect } from 'react-redux'
import { registerCustomerAndGoToHome as registerCustomer } from 'actions/customer-actions'
import CustomerProfileEdit from 'components/CustomerProfileEdit'

const defaultCustomer = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    password: '',
    login: ''
}

const mapStateToProps = (state, ownProps) => {
    return {
        customer: state.customer || defaultCustomer,
        isEditMode: false
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        save: (newCustomer) => {
            dispatch(registerCustomer(newCustomer));
        }
    }
}

const NewCustomerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerProfileEdit)

module.exports = NewCustomerContainer