import React, { Component, Fragment } from 'react';
import { DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    render() {
        return (
            <Fragment>
                <DropdownItem onClick={this.props.logout} href='#' color='secondary'>
                    Logout
        </DropdownItem>
            </Fragment>
        );
    }
}

export default connect(
    null,
    { logout }
)(Logout);
