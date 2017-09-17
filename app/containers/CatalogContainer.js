import { connect } from 'react-redux'
import CatalogPage from '../components/CatalogPage'
import { getCatalog } from 'actions'
import { 
    addToCartAndUpdateSummary as addToCart 
} from 'actions/cart-actions'

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