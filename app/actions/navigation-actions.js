import { push } from 'react-router-redux'

module.exports = {
    goToHome: () => dispatch => dispatch(push('/')),
    goTo: url => dispatch => dispatch(push(url))
}