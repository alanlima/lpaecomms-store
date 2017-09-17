import React, { Component } from 'react'
import { InputTextBox, PasswordField } from 'components/BootstrapForms'

class CustomerProfileEdit extends Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    handlePasswordChange(data) {
        this.setState({
            password: data.password
        })
    }

    render(){
        const customer = {
            firstName: 'Alan',
            lastName: 'Lima',
            address: 'Queen Street',
            phone: '33333',
            login: 'alima'
        }
        
        return (
            <div>
                <InputTextBox 
                    label="First Name"
                    name="firstName"
                    placeholder="Your first name"
                    value={customer.firstName}
                    onChange={this.handleChange} />

                <InputTextBox 
                    label="Last Name"
                    name="lastName"
                    placeholder="Your last name"
                    value={customer.lastName}
                    onChange={this.handleChange} />

                <InputTextBox 
                    label="Address"
                    name="Address"
                    placeholder="Your full address"
                    value={customer.address}
                    onChange={this.handleChange} />

                <InputTextBox 
                    label="Phone Number"
                    name="phone"
                    placeholder="Your phone number"
                    value={customer.phone}
                    onChange={this.handleChange} />
                
                <InputTextBox 
                    label="User Name"
                    name="login"
                    placeholder="Your user name"
                    value={customer.login}
                    onChange={this.handleChange} />

                <PasswordField 
                    onPasswordChange={this.handlePasswordChange} />
            </div>
        )
    }
}

module.exports = CustomerProfileEdit