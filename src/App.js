import React, { Component } from 'react'
import ProductForm from './components/ProductForm'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { product: [{}] }
    constructor() {
        super()
        this.state = {
            main: true,
            Promotion: false,
            Other: false
        }
    }

    componentDidMount() {
        fetch('/product')
            .then(req => req.json())
            .then(product => this.setState({ product }));
    }
    onSubmitHome = e => {
        e.preventDefault()
        this.setState({
            main: true,
            Promotion: false,
            Other: false
        })
    }
    onSubmitPromotion = e => {
        e.preventDefault()
        this.setState({
            main: false,
            Promotion: true,
            Other: false
        })
    }
    
    render() {
        return (
            <view>
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active" onClick={this.onSubmitHome}>
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            
                        </ul>                        
                    </div>
                </nav> */}
                <br/>
                <table align="center" border="0px" width="80%">
                    <div>
                        <LoginForm/>
                    </div>
                </table>
            </view>
        )
    }
}
export default App