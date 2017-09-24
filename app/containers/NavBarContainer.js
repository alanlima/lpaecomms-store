import { connect } from 'react-redux'
import NavBar from 'components/NavBar'

const mapStateToProps = (state, ownProps) => {
    return {
        userLogged: state.Customer.loggedProfile != null,
        userName: state.Customer.loggedProfile ? state.Customer.loggedProfile.name : null
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doLogout: () => {
            
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)