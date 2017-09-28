import { connect } from 'react-redux'
import LogInPage from 'components/LogInPage'
import { logIn } from 'actions/customer-actions'
import queryString from 'query-string'

const mapStateToProps = (state, ownProps) => {

    return {
        isUserAuthenticated: state.Session.isUserAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logIn: (login, password) => {
            const redirectTo = queryString.parse(ownProps.location.search).redirectTo || '/';
            dispatch(logIn(login, password, redirectTo))
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInPage)