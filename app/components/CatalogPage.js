import React, { Component } from 'react'
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

class Product extends Component {
    render() {
        const { imageUrl, name, price, id } = this.props;

        return (
            <div className="col-md-3 col-sm-6">
                <div className="single-shop-product">
                    <div className="product-upper">
                        <img src={imageUrl} alt={'image for ' + name} />
                    </div>
                    <h2>
                        <a href='#'>{name}</a>
                    </h2>
                    <div className='product-carousel-price'>
                        <ins>$ {price}</ins>
                    </div>
                    <div className='product-option-shop'>
                        <a className='add_to_cart_button' href='#'>Add to cart</a>
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}

class CatalogPage extends Component {

    componentDidMount(){
        this.props.getCatalog();
    }

    render() {
        return (
            <div>
                <PageTitle title='Shop' />
                <div style={{padding: "80px 0 130px"}}> 
                    <div className="container">
                        <div className="row">
                            {this.props.catalog.map(item => <Product
                                    key={item.id}
                                    imageUrl={item.image}
                                    name={item.name}
                                    price={item.price}
                                    id={item.id}
                                />)}

                        
                        </div>
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = CatalogPage