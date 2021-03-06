import React from 'react';
import { Container } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class Footer extends React.Component{
    render(){
        return (
            <footer className={"footer"
                + (this.props.default ? " footer-default":"")
            }>
                <Container fluid={this.props.fluid ? true:false}>
                    {/*<nav>
                        <ul>
                            <li>
                                <a href="https://www.xxx.com">
                                    Creative Tim
                                </a>
                            </li>
                            <li>
                                <a href="https://xxx.com">
                                   About Us
                                </a>
                            </li>
                            <li>
                                <a href="https://xxx.com">
                                   Blog
                                </a>
                            </li>
                        </ul>
                    </nav>*/}
                    <div className="copyright">
                        &copy; {1900 + (new Date()).getYear()}, Developed by PAYAL SUREJA.
                        {/*Coded by <a href="xxx" target="_blank" rel="noopener noreferrer">Payal Sureja</a>.*/}
                    </div>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
}

export default Footer;
