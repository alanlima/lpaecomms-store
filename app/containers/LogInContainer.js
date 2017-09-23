import { connect } from 'react-redux'
import LogInPage from 'components/LogInPage'
import { logIn } from 'actions/customer-actions'
import queryString from 'query-string'

const mapStateToProps = (state, ownProps) => {
    // console.log(state, ownProps);
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logIn: (login, password) => {
            const returnUrl = queryString.parse(ownProps.location.search).returnUrl || '/';
            dispatch(logIn(login, password, returnUrl))
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInPage)