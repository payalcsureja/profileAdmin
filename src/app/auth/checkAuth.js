// in src/restricted.js
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { requireAuth } from 'app/auth/authService';
/**
 * Higher-order component (HOC) to wrap restricted pages
 */
export default function BaseComponent() {
    class Restricted extends Component {
        componentWillMount() {
            this.checkAuthentication(this.props);
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.location !== this.props.location) {
                this.checkAuthentication(nextProps);
            }
        }
        checkAuthentication(params) {
            const { history } = params;
            requireAuth()
                .catch(e => history.replace({ pathname: '/' }));
        }
        render() {
            return <BaseComponent {...this.props} />;
        }
    }
    return withRouter(Restricted);
}