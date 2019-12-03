import React from 'react'
import ProductForm from './components/ProductForm'

class MainHome extends React.Component {

    constructor() {
        super()
        this.state = {
            main: true,
            Promotion: false,
            Other: false
        }
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
    onSubmitOther = e => {
        e.preventDefault()
        this.setState({
            main: false,
            Promotion: false,
            Other: true
        })
    }

    render() {
        var Mainform;
        if (this.state.main) {
            Mainform = <ProductForm />
        }
        else {
            Mainform = 'เอาไรมาใส่ดีน๊าาาา'
        }

        return (
            <viwe>
                <div>
                    <tablr width="100%" height="100%"  border="1px">
                        <table align="left" height="100%" width="20%" border="1px">
                            <div align="center" class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                            </div>
                            

                        </table>
                        <table align="right" height="100%" width="80%" border="1px">
                            <p> 4565</p>
                        </table>
                    </tablr>
                </div>
            </viwe>
        )
    }
}

export default MainHome