import { connect } from 'react-redux'
import CatalogFilter from 'components/CatalogFilter'
import { SetTextFilter } from 'actions/text-filter'


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        applyTextFilter: (filter) => {
            dispatch(SetTextFilter(filter))
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogFilter)