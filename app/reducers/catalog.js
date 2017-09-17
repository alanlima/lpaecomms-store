import actionTypes from 'actions/action-types'

const catalog = (state = [], action) => {
    switch(action.type) {
        case actionTypes.GetCatalog:
            return action.catalog;
        default:
            return state;
    }
}

module.exports = catalog;