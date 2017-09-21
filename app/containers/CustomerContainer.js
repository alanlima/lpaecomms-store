import { connect } from 'react-redux'
import { registerCustomerAndGoToHome as registerCustomer } from 'actions/customer-actions'
import CustomerFormPage from 'components/CustomerFormPage'

const emptyCustomer = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    login: ''
}

const mapStateToProps = (state, ownProps) => {
    return {
        customer: state.Customer.isEditMode ? state.Customer.loggedCustomerProfile : emptyCustomer,
        isEditMode: state.Customer.isEditMode
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        save: (newCustomer) => {
            dispatch(registerCustomer(newCustomer));
        },
        loadCustomerDataToEdit: () => {
            
        }
    }
}

const CustomerFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerFormPage)

module.exports = CustomerFormContainer