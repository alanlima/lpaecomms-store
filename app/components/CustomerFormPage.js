import React, { Component } from 'react'
import CustomerProfileEdit from 'components/CustomerProfileEdit'
import PageContent from 'components/PageContent'

class CustomerFormPage extends Component {
    render(){
        return (
            <PageContent title="Customer Regitration">
                <CustomerProfileEdit {...this.props} />
            </PageContent>
        )
    }
}

module.exports = CustomerFormPage