import { connect } from 'react-redux'
import CatalogPage from '../components/CatalogPage'
import { getCatalog } from 'actions'

const mapStateToProps = (state, ownProps) => {
    return {
        catalog: state.Catalog
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCatalog: () => {
            dispatch(getCatalog())
        }
    }
}

const CatalogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogPage)

module.exports = CatalogContainer;