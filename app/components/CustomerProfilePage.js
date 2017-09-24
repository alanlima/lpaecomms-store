import React from 'react'
import PageContent from 'components/PageContent'

const fieldStyles = {
    contentStyle: {
        fontSize: "1.2em"
    },
    labelStyle: {
        fontWeight: 'bold',
    }
}


const Field = (props) => {
    return (
        <div className="row" style={fieldStyles.contentStyle}>
            <div className="col-md-2" style={fieldStyles.labelStyle}>{props.label}:</div>
            <div className="col-md-6">
                {props.value}
            </div>
        </div>
    )
}

const CustomerProfilePage = (props) => {
    const {
        name,
        address,
        login,
        phone
    } = props.customer;
    return (
        <PageContent title="Customer Profile">
            <Field label="Name" value={name} />
            <Field label="Address" value={address} />
            <Field label="Phone" value={phone} />
            <Field label="Login" value={login} />
        </PageContent>
    )
}

module.exports = CustomerProfilePage