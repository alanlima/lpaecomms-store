import React from 'react'
import PropTypes from 'prop-types'

const PageTitle = props => {
    return (
        <div className="product-big-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-bit-title text-center">
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

module.exports = PageTitle