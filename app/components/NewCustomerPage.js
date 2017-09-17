import React, { Component } from 'react'
import CustomerProfileEdit from 'components/CustomerProfileEdit'

class NewCustomerPage extends Component {
    render(){
        return (
            <div className="container">
                <CustomerProfileEdit />
            </div>
        )
    }
}

module.exports = NewCustomerPage