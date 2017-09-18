import { push } from 'react-router-redux'

module.exports = {
    goToHome: () => dispatch => dispatch(push('/'))
}