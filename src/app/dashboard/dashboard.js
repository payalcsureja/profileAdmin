import React from 'react';

import {
    Card, CardHeader, CardBody, CardFooter, Row, Col
} from 'reactstrap';

// import { login, logout, isLoggedIn } from 'app/auth/authService';

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
                <div className="content">
                    <Row>
                        <Col xs={12} md={4}>
                            <Card>
                                <CardHeader>

                                </CardHeader>
                                <CardBody>
                                    {/* {
                                        ( isLoggedIn() ) ? <Link to="/user-page">User</Link> :  ''
                                    } */}
                                    {/*{
                                        (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                                    }*/}
                                </CardBody>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
