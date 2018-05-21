import React from 'react';
import { login, logout, isLoggedIn } from 'app/auth/authService';

import {
    PanelHeader
} from 'app/components';


class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader
                    size="sm"
                    content=""
                />
                {/* {
                    ( isLoggedIn() ) ? <Link to="/user-page">User</Link> :  ''
                } */}
                {
                    (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                }
            </div>
        );
    }
}

export default Dashboard;
