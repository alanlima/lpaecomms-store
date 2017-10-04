import React from 'react'
import PropTypes from 'prop-types'

const PageContent = props => {
    return (
        <div>
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
            <div style={{padding: "20px 0 130px"}}> 
                <div className="container">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

PageContent.propTypes = {
    title: PropTypes.string.isRequired
}

module.exports = PageContent