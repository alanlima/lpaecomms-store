import { connect } from 'react-redux'
import CatalogPage from '../components/CatalogPage'
import { getCatalog, addToCart } from 'actions'

const mapStateToProps = (state, ownProps) => {
    return {
        catalog: state.Catalog
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCatalog: () => {
            dispatch(getCatalog())
        },
        addToCart: (product) => {
            dispatch(addToCart(product, 1))
        }
    }
}

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogPage)

module.exports = CatalogContainer;