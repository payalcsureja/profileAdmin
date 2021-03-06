import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Header from 'app/layout/header/header';
import Footer from 'app/layout/footer/footer';
import Sidebar from 'app/layout/sidebar/sidebar';

import dashboardRoutes from 'app/routes/dashboard.js';
import Restricted from 'app/auth/checkAuth.js';
import { login, logout, isLoggedIn } from 'app/auth/authService';

var ps;

class Dashboard extends React.Component{
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
                <Sidebar {...this.props} routes={dashboardRoutes} isLoggedIn={isLoggedIn}/>
                <div className="main-panel" ref="mainPanel">
                    <Header {...this.props} login={login} logout={logout} isLoggedIn={isLoggedIn} />
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

export default Dashboard;
