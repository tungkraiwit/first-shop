import React, { Component } from 'react'
import LoginForm from './LoginForm'

class profile extends Component {
    state = {
        login:{ 
            email: null,
            password: null
        },
        employee: {
            employeeNumber: null,
            lastName: '',
            firstName: '',
            extension: '',
            email: '',
            officeCode: '',
            reportsTo: '',
            jobTitle: ''
        },
        customer: {
            customerNumber: null,
            customerName: '',
            customerLastName: '',
            customerFirstName: '',
            phone: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            postalCode: '',
            countey: '',
            salesRepEmployeesNumber: '',
            creditLimit: ''
        }
    }
    // constructor(props) {
    //     super(props)
    //     this.state.employee = {
    // employeeNumber: null,
    // lastName: '',
    // firstName: '',
    // extension: '',
    // email: '',
    // officeCode: '',
    // reportsTo: '',
    // jobTitle: ''
    //     }
    //     ,super(props)
    //     this.state.customer = {
    // customerNumber: null,
    // customerName: '',
    // customerLastName: '',
    // customerFirstName: '',
    // phone: '',
    // addressLine1: '',
    // addressLine2: '',
    // city: '',
    // state: '',
    // postalCode: '',
    // countey: '',
    // salesRepEmployeesNumber: '',
    // creditLimit: ''
    //     }
    // }

    render() {
        let { employeeNumber,
            lastName,
            firstName,
            extension,
            email,
            officeCode,
            reportsTo,
            jobTitle } = this.state.employee
        let { customerNumber,
            customerName,
            customerLastName,
            customerFirstName,
            phone,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            countey,
            salesRepEmployeesNumber,
            creditLimit } = this.state.customer
        if (this.props.email != null) {
            return (
                <div>
                    <p>{this.props.email}</p>

                    {/* <p>{this.props.email}</p>
                <p>{this.props.password}</p> */}
                </div>
            )
        }
        else {
            return (
                <div>
                    <LoginForm />
                </div>
            )
        }

    }
}
export default profile;