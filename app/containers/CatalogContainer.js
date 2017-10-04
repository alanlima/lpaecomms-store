import { connect } from 'react-redux'
import CatalogPage from '../components/CatalogPage'
import { getCatalog } from 'actions'
import { 
    addToCartAndUpdateSummary as addToCart 
} from 'actions/cart-actions'

const applyFilter = (catalog, filter) => {
    if(filter.textFilter) {
        return catalog.filter(item => {
            const filterLowerCase = filter.textFilter.toLowerCase()
            return item.name.toLowerCase().indexOf(filterLowerCase) != -1;
                // || item.description.toLowerCase().indexOf(filterLowerCase) != -1
        })
    }

    return catalog;
}

const mapStateToProps = (state, ownProps) => {
    return {
        catalog: applyFilter(state.Catalog, state.CatalogFilter)
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