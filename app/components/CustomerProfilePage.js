import React from 'react'
import PageContent from 'components/PageContent'
import { Field } from 'components/BootstrapForms'

const CustomerProfilePage = (props) => {
    const {
        firstName,
        lastName,
        address,
        login,
        phone
    } = props.customer;
    return (
        <PageContent title="Customer Profile">
            <Field label="Name" value={`${firstName} ${lastName}`} />
            <Field label="Address" value={address} />
            <Field label="Phone" value={phone} />
            <Field label="Login" value={login} />
        </PageContent>
    )
}

module.exports = CustomerProfilePage