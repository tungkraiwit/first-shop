import React, { Component } from 'react';
import Main from '../Main'
import Employee from '../Employees'
// import {Router,Route,Link,browserHistory} from 'react-router'
import ProductForm from './ProductForm'

class LoginForm extends Component {
  state = { users: null, employee: [], customer: [] }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      currentUser: null,
      message: ''
    }
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    fetch('/users')
      .then(req => req.json())
      .then(users => this.setState({ users }));
  }


  onSubmit = e => {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
      currentUser: this.state.currentUser
    }

    const profile = this.state.users.map(users => {
      if (user.email === users.email && user.password === users.employeeNumber) {
        this.setState({
          message: '',
          currentUser: true
        })
        return users
      }
    }).reduce(e => e)
    console.log(profile)

    if (profile == null) {
      console.log("1234568789")
      return this.setState({
        message: 'failed',
        currentUser: false
      })

    }

  }

  render() {

    const { message, email, password, currentUser } = this.state
    const users = this.state.users

    if (users == null) {
      return (
        <div>
          <p> 5555555555</p>
        </div>
      )
    }

    if (currentUser) {
      return (
        <view>
          <Main nextpage="employee" />
        </view>
      )
    }
    else {
      return (
        <view>
          <div action='/profile/login' method='post'>
            <section className="section container">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" onClick={this.onSubmitHome}>
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>

                  </ul>
                  <div className="columns is-centered">
                    <div className="column is-half">
                      <form onSubmit={this.onSubmit} class="form-inline my-2 my-lg-0">
                        {/* <div className="field"> */}
                        <h4 class="text-danger">{message}</h4>
                        {/* <label className="label">Email</label> */}
                        <div className="control">
                          <input
                            class="form-control mr-sm-2"
                            // className="input"
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            onChange={this.onChange}
                          />
                        </div>
                        {/* </div> */}

                        {/* <div className="field"> */}
                        {/* <label className="label">Password</label> */}
                        <div className="control">
                          <input
                            class="form-control mr-sm-2"
                            // className="input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.onChange}
                          />
                        </div>
                        {/* </div> */}

                        <div className="field is-grouped">
                          <div className="control">
                            <button className="button is-link">Sign In</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </nav>
            </section>
          </div>
          <br />
          <ProductForm />
        </view>
      )
    }
  }
}
export default LoginForm