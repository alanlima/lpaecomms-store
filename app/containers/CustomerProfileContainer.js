import { connect } from 'react-redux'
import CustomerProfilePage from 'components/CustomerProfilePage'

const mapStateToProps = (state, ownProps) => {
    return {
        customer: state.Customer.loggedProfile || {}
    }
}

module.exports = connect(
    mapStateToProps,
    (dispatch, ownProps) => { return { } }
)(CustomerProfilePage)