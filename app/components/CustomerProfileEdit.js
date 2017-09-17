import React, { Component } from 'react'
import { InputTextBox, PasswordField } from 'components/BootstrapForms'

class CustomerProfileEdit extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: 'Alan',
            lastName: 'Lima',
            address: 'Queen Street',
            phone: '33333',
            login: 'alima'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRegisterCustomer = this.handleRegisterCustomer.bind(this);
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

    handleRegisterCustomer() {
        const customer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone,
            login: this.state.login,
            password: this.state.password
        }
        this.props.registerCustomer(customer);
    }

    render(){
        
        return (
            <div>
                <InputTextBox 
                    label="First Name"
                    name="firstName"
                    placeholder="Your first name"
                    value={this.state.firstName}
                    onChange={this.handleChange} />

                <InputTextBox 
                    label="Last Name"
                    name="lastName"
                    placeholder="Your last name"
                    value={this.state.lastName}
                    onChange={this.handleChange} />

                <InputTextBox 
                    label="Address"
                    name="Address"
                    placeholder="Your full address"
                    value={this.state.address}
                    onChange={this.handleChange} />

                <InputTextBox 
                    label="Phone Number"
                    name="phone"
                    placeholder="Your phone number"
                    value={this.state.phone}
                    onChange={this.handleChange} />
                
                <InputTextBox 
                    label="User Name"
                    name="login"
                    placeholder="Your user name"
                    value={this.state.login}
                    onChange={this.handleChange} />

                <PasswordField 
                    onPasswordChange={this.handlePasswordChange} />

                <div className="row pull-right">
                    <button className="btn btn-primary" onClick={this.handleRegisterCustomer}>
                        Register
                    </button>
                </div>
            </div>
        )
    }
}

module.exports = CustomerProfileEdit