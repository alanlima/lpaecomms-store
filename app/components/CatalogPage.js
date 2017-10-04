import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageContent from 'components/PageContent'
import CatalogFilterContainer from 'containers/CatalogFilterContainer'

class Product extends Component {
    render() {
        const { imageUrl, name, price, id, description } = this.props;

        return (
            <div className="col-md-3 col-sm-6" >
                <div className="single-shop-product">
                    <div className="product-upper" style={{ height: "180px", width: "200px", display: "inline-block"}}>
                        <img src={imageUrl} alt={'image for ' + name} />
                    </div>
                    <h2 style={{ height: "50px" }}>
                        <a href='#'>{name}</a>
                    </h2>
                    <div className='product-carousel-price' >
                        <ins>$ {price}</ins>
                    </div>
                    <div className='product-option-shop' style={{ }}>
                        <button className='add_to_cart_button' onClick={this.props.addToCart} >Add to cart</button>
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
    id: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}

class CatalogPage extends Component {

    componentDidMount(){
        this.props.getCatalog();
    }

    render() {
        return (
            <PageContent title="Shop">
                <div className="row">
                    <CatalogFilterContainer />
                </div>
                <div className="row">
                    {this.props.catalog.map(item => <Product
                            key={item.id}
                            imageUrl={item.image}
                            name={item.name}
                            price={item.price}
                            id={item.id}
                            addToCart={() => this.props.addToCart(item)}
                        />)}
                
                </div>
                <div className="row">
                </div>
            </PageContent>
        )
    }
}

module.exports = CatalogPage