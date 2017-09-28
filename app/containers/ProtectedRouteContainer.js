import { connect } from 'react-redux'
import React, { Component } from 'react'
import NavigationActions from 'actions/navigation-actions'

class ProtectedComponent extends Component {

    componentDidMount() {
        const { currentUrl, isLoggedIn } = this.props

        console.log(this.props);

        if(!isLoggedIn) {
            this.props.goToLogin();
        }
    }

    render() {
        const { isLoggedIn, children } = this.props;
        console.log('the children', this.props);
        return isLoggedIn ? <h1>logged</h1> : <div>not logged</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.Customer.loggedProfile != null,
        currentUrl: ownProps.location.pathname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goToLogin: () => {
            dispatch(NavigationActions.goTo("/login?redirectTo=" + ownProps.currentUrl))
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProtectedComponent);