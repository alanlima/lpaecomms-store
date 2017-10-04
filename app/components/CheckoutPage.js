import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageContent from 'components/PageContent'
import { Field, SelectField } from 'components/BootstrapForms'
import { Link, Redirect } from 'react-router-dom'

class InCheckout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPayment: null
        }

        this.handlePaymentChanged = this.handlePaymentChanged.bind(this);
    }

    handlePaymentChanged(name, value) {
        this.setState({
            selectedPayment: value
        })
    }

    render() {
        const { customerProfile, paymentOptions, doPayment, thereAreItemsInCart } = this.props;
        
        if(!customerProfile) return null;

        if(!thereAreItemsInCart) {
            return (
                <div>
                    <center>
                        <h3>The cart is empty.</h3>
                        <Link to="/">
                            <strong>
                                Please, add at least one item to the cart.
                            </strong>
                        </Link>
                    </center>
                </div>
            )
        }
    
        return (
            <div>
                <fieldset>
                    <legend>Customer Details</legend>
                    <Field label="First Name" value={customerProfile.firstName} />
                    <Field label="Last Name" value={customerProfile.lastName} />
                    <Field label="Address" value={customerProfile.address} />
                    <Field label="Phone" value={customerProfile.phone} />
    
                    <SelectField label="Payment Method"
                                    name="paymentMethod"
                                    options={paymentOptions}
                                    onChange={this.handlePaymentChanged} />
                    
                </fieldset>

                <div className="row pull-right">
                    {this.state.selectedPayment && (
                        <button className="btn btn-primary"
                                onClick={() => doPayment(this.state.selectedPayment)}>
                            Pay Now
                        </button>
                    )}
                </div>
            </div>
        )
    }
}

const CheckoutCompleted = (props) => {
    const { invoiceId } = props;

    return (<div>
        <h2>Thanks !</h2>

        <h3>Your invoice number <strong>#{invoiceId}</strong> was placed.</h3>

        <h4>We'll send you email confirmation soon</h4>

        <Link to='/'>
            <strong>Continue buying</strong>
        </Link>

    </div>);
}

class CheckoutPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        if(!this.props.isSessionRehydrated) return null;

        if(!this.props.isUserAuthenticated) {
            return <Redirect to={`login?redirectTo=${this.props.location.pathname}`} />
        }

        const invoiceId = this.props.match.params.invoiceId;
    
        return (
            <PageContent title='Checkout'>
                {!invoiceId && <InCheckout {...this.props} />}
                {invoiceId && <CheckoutCompleted invoiceId={invoiceId} />}
            </PageContent>
        )
    }
}

module.exports = CheckoutPage