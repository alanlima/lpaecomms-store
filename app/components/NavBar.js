import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavBarMenu = (props) => {
    return (
        <div className='user-menu'>
            <ul>
                {props.items.map(item => 
                    <li key={item.title}>
                        <Link to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}

NavBarMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }))
}

const LogoutContainer = (props) => {
    return (
        <div>
            <span>Hi, {props.userName}</span>
            <button onClick={props.doLogout}>Logout</button>
        </div>
    )
}

const NavBar = (props) => {
    const MenuItemsData = [
        { url: '/customer/profile', icon: 'fa fa-user', title: 'My Account' },
        { url: '/cart', icon: 'fa fa-shopping-cart', title: 'My Cart' },
        { url: '#', icon: 'fa fa-user', title: 'Checkoput' }
    ]
    console.log('navbar', props);
    return (
        <nav className='header-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <NavBarMenu items={MenuItemsData} />
                    </div>
                    
                    <div className="col-md-4">
                        <div className="header-right">

                            { props.userLogged ? <LogoutContainer {...props} /> : <Link to='/login?returnUrl=/'>Login</Link> }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: ''
}

module.exports = NavBar;