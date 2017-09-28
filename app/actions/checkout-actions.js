import ActionTypes from 'actions/action-types'
import NavigationActions from 'actions/navigation-actions'
import WebApi from 'api/webapi'

const createOrder = (customerProfile, totalAmount, items, paymentChoosen) => {
    return dispatch => {
        const order = {
            customerId: customerProfile.id,
            customerName: customerProfile.firstName + ' ' + customerProfile.lastName,
            customerAddress: customerProfile.address,
            totalAmount,
            paymentChoosen,
            items
        }

        console.log('the order', order);

        return WebApi.createOrder(order)
                     .then((data) => {
                         dispatch({
                             type: ActionTypes.OrderCreatedSuccessfully,
                             invoiceId: data.invoiceId,
                             totalAmount
                         });
                         return data.invoiceId;
                     })
                     .then((invoiceId) => {
                        dispatch(NavigationActions.goTo('/checkout/' + invoiceId))
                     });
    }
}

module.exports = {
    createOrder
}