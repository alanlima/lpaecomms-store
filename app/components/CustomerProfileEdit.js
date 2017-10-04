import React, { Component } from 'react'
import { InputTextBox, PasswordField } from 'components/BootstrapForms'
import { Link } from 'react-router-dom'

class CustomerProfileEdit extends Component {

    constructor(props){
        super(props);

        this.state = Object.assign({}, props.customer);

        console.log(this.state);

        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSaveCustomer = this.handleSaveCustomer.bind(this);
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

    handleSaveCustomer() {
        const customer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone,
            login: this.state.login,
            password: this.state.password,
        }
        this.props.save(customer);
    }

    render(){
        const { isEditMode } = this.props;
        
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
                    name="address"
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

                {!isEditMode && <PasswordField onPasswordChange={this.handlePasswordChange} />}

                <div className="row pull-right">
                    <button className="btn btn-primary" onClick={this.handleSaveCustomer}>
                        Save
                    </button>
                    <Link className="btn btn-default" to="/">
                        Cancel
                    </Link>
                </div>
            </div>
        )
    }
}

module.exports = CustomerProfileEdit