import React, { Component } from "react";
import Header from "./header/Header";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Feedback from "./feedback/Feedback";
import Auth from "./Auth/Auth";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import Logout from "./Auth/Logout";
import Photos from "./Photos/Photos";

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}


class MainComponent extends Component {
    componentDidMount() {
        this.props.authCheck();
        console.log(this.props);
    }
    render() {
        let routes = null;
        if (this.props.auth.token === null) {
            routes = (
                <Switch>
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/login" component={Auth} />
                    <Route path="/photography" component = {Photos}/>
                    <Route path = "/" component={Home} />
                </Switch>
            )
        } else {
            routes = (
                <div>
                    <Switch>
                        <Route path="/photography" component = {Photos}/>   
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/feedback" exact component={Feedback} />
                        <Route path="/logout" component={Logout} />
                        <Route path = "/" component={Home} />
                    </Switch>
                </div>
            )
        }

        return (
            <div>
                <div className="container">
                    <Header />
                    {routes}
                </div>
            </div>
        )
    }
}

//export default MainComponent;

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);