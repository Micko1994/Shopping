import React, { PureComponent } from 'react';


// import Logo from 'assets/level-up-logo.png';


import './style.scss';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer className="Footer flexible aCenter jBetween">
                <div className="logo flexible aCenter">

                </div>
                <div className="footer-text">
                    ©2019 Shopping Shirt Center
                </div>
            </footer>
        )
    }
}