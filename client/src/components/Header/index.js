import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../auth/LoginModal';
import Logout from '../auth/Logout';
import {
    withRouter,
    NavLink
} from 'react-router-dom';


class Header extends Component {
    state = {
        isOpen: false,
        dropdownOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        console.log(user)
        const id = user ? user.id : ''
        const authLinks = (
            <Fragment>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                    <DropdownToggle caret>
                        <span className='navbar-text mr-3'>
                            <strong>{user ? `Hi ${user.name}` : ''}</strong>
                        </span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <NavLink to={`/user/${id}`} >My Profile</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink to={`/order`} >My Orders</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <Logout />
                    </DropdownMenu>
                </ButtonDropdown>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );


        return (
            <div className='App'>
                <Navbar color='dark' dark expand='sm'>
                    <Container>
                        <NavbarBrand href='/'>Shopping Shirt</NavbarBrand>
                        <NavLink to="/create">Create</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

withRouter(Header)

export default connect(
    mapStateToProps,
    null
)(Header);
