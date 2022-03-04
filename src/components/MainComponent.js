import React, { Component } from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Contact from "./body/Contact";
import Feedback from "./feedback/Feedback";
import Auth from "./Auth/Auth";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import Logout from "./Auth/Logout";

const mapStateToProps = state => {
    return {
        token: state.token,
        userId: state.userId,
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
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login" component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )
        } else {
            routes = (
                <div>
                    <Header />
                    <Switch>
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/" element={<Body />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                <Header />
                    {/* {routes} */}
                    <Switch>
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/" element={<Body />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/feedback" element={<Feedback />} />
                        {/* <Redirect to="/" /> */}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);