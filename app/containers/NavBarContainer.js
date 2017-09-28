import { connect } from 'react-redux'
import NavBar from 'components/NavBar'
import { doLogout } from 'actions/customer-actions'

const mapStateToProps = (state, ownProps) => {
    return {
        userLogged: state.Customer.loggedProfile != null,
        userName: state.Customer.loggedProfile ? state.Customer.loggedProfile.firstName : null
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doLogout: () => {
            dispatch(doLogout());
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)