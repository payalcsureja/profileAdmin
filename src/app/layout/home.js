import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import Footer from 'app/layout/footer/footer';
import {
    Navbar, Container
} from 'reactstrap';

import dashboardRoutes from 'app/routes/dashboard.js';
import Restricted from 'app/auth/checkAuth.js';
import { login, logout, isLoggedIn } from 'app/auth/authService';
import logo from "app/assets/img/logo-white.svg";

var ps;

class Home extends React.Component{
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentDidUpdate(e) {
      if(e.history.action === "PUSH"){
        this.refs.mainPanel.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    }
    render(){
        return (
            <div className="wrapper">                
                <div className="main-panel main-panel-home" ref="mainPanel">
                    <Navbar
                        className="navbar-absolute fixed-top navbar-transparent navbar navbar-expand-lg bg-transparent"
                    >
                        <Container fluid> 
                            <div className="navbar-wrapper">  
                                <div className="logo">
                                    <a href="/" className="simple-text logo-mini">
                                        <div className="logo-img">
                                            <img src={logo} alt="react-logo" />
                                        </div>
                                    </a>
                                    <a href="/" className="simple-text logo-normal">
                                        {process.env.REACT_APP_TITLE}
                                    </a>
                                </div>
                            </div>
                            {
                            (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                            } 
                        </Container>
                    </Navbar>                    
                    <Switch>
                        {
                            dashboardRoutes.map((prop,key) => {
                                if(prop.collapse){
                                    return prop.views.map((prop2,key2) => {
                                        return (
                                            <Route path={prop2.path} component={prop2.component} key={key2} />
                                        );
                                    })
                                }
                                if(prop.redirect)
                                    return (
                                        <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                    );
                                if(prop.requireAuth)
                                    return (
                                        <Route path={prop.path} component={Restricted(prop.component)} key={key} />
                                    );
                                return (
                                    <Route path={prop.path} component={prop.component} key={key}/>
                                );
                            })
                        }
                    </Switch>
                    <Footer fluid/>
                </div>
            </div>
        );
    }
}

export default Home;
