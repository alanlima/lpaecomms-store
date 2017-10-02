import React, { Component } from 'react'
import PageContent from 'components/PageContent'
import { InputTextBox, PasswordBox } from 'components/BootstrapForms'
import { Link } from 'react-router-dom'

const contentStyles = {
    newUserButton: {
        padding: "11px 20px",
        marginRight: "7px"
    }
}

class LogInPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value) {
        this.state[name] = value;
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.logIn(this.state.login, this.state.password);
        return false;
    }

    render(){
        return (
            <PageContent title="Customer Log In">
                <div style={{margin: "0 auto", width: "350px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <InputTextBox
                            label='User Name'
                            value={this.state.login}
                            name='login'
                            onChange={this.handleChange} />
                        <PasswordBox
                            label='Password'
                            value={this.state.password}
                            name='password'
                            onChange={this.handleChange} />

                        <div className="pull-right">
                            <Link to='/customer/new' style={contentStyles.newUserButton} className="btn btn-default">
                                New User ?
                            </Link>

                            <input type="submit" className="btn btn-primary" value="Log in" />
                        </div>  
                    </form>
                </div>
            </PageContent>
        )
    }
}

module.exports = LogInPage