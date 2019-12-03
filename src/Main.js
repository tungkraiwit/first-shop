import React from 'react'
import LoginForm from './components/LoginForm'
import Employee from './Employees'
// import Test from './test'

class MainHome extends React.Component {

    render() {
        if (this.props.nextpage == null) {
            return (
                <LoginForm />
            )
        }
        else if (this.props.nextpage == 'employee') {
            return (
                <Employee />
            )
        }
    }
}

export default MainHome