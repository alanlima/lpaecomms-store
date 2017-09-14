import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = props => {
    return (
        <li>
            <a href={props.url}>
                {props.text}
            </a>
        </li>
    )
}

const Menu = props => {

    const items = [
        { text: 'HOME', url: '#' },
        { text: 'SHOP PAGE', url: '#' },
        { text: 'SINGLE PRODUCT', url: '#' },
        { text: 'CART', url: '#' },
    ]

    return (
        <div className="mainmenu-area">
            <div className="container">
                <div className="row">
                    <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                    </div>

                    <div className="navbar-collapse collapse" style={{ height: '1px' }}>
                        <ul className="nav navbar-nav">
                            {items.map(item => <MenuItem key={item.text} {...item} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Menu