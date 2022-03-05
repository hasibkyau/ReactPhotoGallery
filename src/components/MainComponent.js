import React, { Component } from "react";
import Header from "./header/Header";
import Home from "./body/Home/Home";
import Contact from "./body/Contact";
import Feedback from "./feedback/Feedback";
import Auth from "./Auth/Auth";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import Logout from "./Auth/Logout";

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
                    <Home />
                </Switch>
            )
        } else {
            routes = (
                <div>
                    <Header />
                    <Switch>
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/feedback" exact component={Feedback} />
                        <Route path="/logout" component={Logout} />
                        <Home />
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