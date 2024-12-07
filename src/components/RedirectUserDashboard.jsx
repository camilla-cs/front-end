import React from "react";
import { Navigate } from "react-router-dom";


export class RedirectUserDashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }


    changeRedirectStatus = () => {
        this.setState({shouldRedirect: true})
    }

    render(){
        return(
            <div>
                <button onClick={this.changeRedirectStatus}>
                    Go back
                </button>
                {this.state.shouldRedirect && <Navigate to="/userdashboard" />} 
            </div>
        )
    }
}