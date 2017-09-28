import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// const ProtectedRoutes = (props) => {
//     const children = Array.isArray(props.children) ? props.children : [props.children];
//     console.log('protected route')
//     if(!props.isSessionLoaded) return null;

//     if(!props.isUserAuthenticated) return (<div>
//             {children.map(item => (<Route 
//                                     key={item.props.path} 
//                                     path={item.props.path} 
//                                     render={p => (<Redirect to="/login" />)} />))}
//         </div>)

//     return (<div>
//                 {children.map(item => (<Route key={item.props.path} {...item.props} />))}
//     </div>);
// }

class ProtectedRoutes extends Component
{
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    render(){
        const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
        console.log('protected route', children)
        // if(!this.props.isSessionLoaded) return null;

        if(!this.props.isUserAuthenticated) return (<div>
                {children.map(item => (<Route 
                                        key={item.props.path} 
                                        path={item.props.path} 
                                        render={p => (<Redirect to="/login" />)} />))}
            </div>)

        return (<div>
                    {children.map(item => (<Route key={item.props.path} {...item.props} />))}
        </div>);
    }
}

const AuthRoute = (props) => {
    console.log(props);
    const { component : Component, isAuthenticated, isSessionLoaded, loginUrl, path } = props;
    return <Route path={path} render={p => {
                if(!isSessionLoaded) return <h1>teste</h1>;

                if(isAuthenticated){
                    return <Component {...p} />
                } else {
                    return <Redirect to={loginUrl + "?redirectTo=" + path} />
                }
            }} />
}

AuthRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element
    ]).isRequired,
    loginUrl: PropTypes.string.isRequired
    // isAuthenticated: PropTypes.func.isRequired
}

module.exports = {
    AuthRoute,
    ProtectedRoutes
}