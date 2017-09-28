import React, { Component } from 'react'
import PropTypes from 'prop-types'

const formStyles = {
    fieldStyles: {
        contentStyle: {
            fontSize: "1.2em"
        },
        labelStyle: {
            fontWeight: 'bold',
        }
    }
}

class InputBox extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: props.value
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
        this.props.onChange(event.target.name, event.target.value)
    }

    render() {
        const { label, name, placeholder, onChange, type} = this.props;
        return (
            <div className="form-group">
                {label && <label htmlFor={name}>{label}</label>}
                <input 
                    type={type}
                    className="form-control" 
                    placeholder={placeholder}
                    name={name}
                    value={this.state.value}
                    readOnly={onChange === undefined}
                    onChange={this.handleChange} />
            </div>
        )
    }
}

InputBox.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    type: PropTypes.oneOf([ 'text', 'password' ]).isRequired
}

const InputTextBox = (props) => {
    return (
        <InputBox {...props} type='text' />
    )
}

const PasswordBox = (props) => {
    return (
        <InputBox {...props} type='password' />
    )
}

class PasswordField extends Component {
    constructor(props){
        super(props)

        this.state = {
            password: '',
            confirmPassword: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value) {
        this.setState({
            [name]: value
        })

        setTimeout(() => {
            const passwordValid = this.state.password
                                && this.state.confirmPassword
                                && this.state.password === this.state.confirmPassword;
            this.props.onPasswordChange({
                isValid: passwordValid == true,
                password: this.state.password
            })
        })
    }

    render() {

        return (
            <div>
                <PasswordBox
                    label="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange} />
                
                <PasswordBox
                    label="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange} />
            </div>
        )
    }
}

const Field = (props) => {
    return (
        <div className="row" style={formStyles.fieldStyles.contentStyle}>
            <div className="col-md-2" style={formStyles.fieldStyles.labelStyle}>{props.label}:</div>
            <div className="col-md-6">
                {props.value}
            </div>
        </div>
    )
}

Field.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

class SelectField extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, selectedValue) {
        this.props.onChange(name, selectedValue);
    }

    render(){
        const { label, name, options, showSelectValueOption } = this.props;

        return (
            <div className='form-group'>
                {label && <label htmlFor={name}>{label}</label>}
                <select id={name} name={name} 
                        className='form-control'
                        onChange={event => this.handleChange(name, event.target.value)}>

                        {showSelectValueOption && <option>(Select Value)</option>}

                        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>
        )
    }
}

SelectField.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    showSelectValueOption: PropTypes.bool,
    options: PropTypes.array.isRequired
}

SelectField.defaultProps = {
    onChange: (name, value) => {},
    showSelectValueOption: true
}

module.exports = {
    InputTextBox,
    PasswordBox,
    PasswordField,
    Field,
    SelectField
}