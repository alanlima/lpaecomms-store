import webApi from 'api/webapi'
import actionTypes from './action-types'

const getCatalog = () => {
    return dispatch => {
        return webApi
                .getCatalog()
                .then(catalog => dispatch(getCatalogAction(catalog)));
    }
}

const getCatalogAction = catalog => {
    return {
        type: actionTypes.GetCatalog,
        catalog
    }
}

module.exports = getCatalog;