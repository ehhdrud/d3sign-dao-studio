import React, { useContext } from 'react';
import { ToggleContext } from '../store/ToggleContext';
import './styles/footer.css';
import logo from '../images/logo.jpg';
import SnsBottom from './footerComponents/SnsBottom';

export default function Footer() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`footer ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <div className="logo-and-text">
                <img className="logo" src={logo} alt="D3sign DAO Studio" />
                <p className="text">
                    © 2023 D3sign DAO Studio. All rights reserved.
                    <br />
                    Contact us:{' '}
                    <a
                        href="https://www.instagram.com/d3sign_dao_studio"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span className="footer-link">Instagram</span>
                    </a>{' '}
                    or{' '}
                    <a
                        href="mailto:d3signdaostudio@gmail.com?subject=문의사항"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span className="footer-link">d3signdaostudio@gmail.com</span>
                    </a>
                </p>
            </div>
            <SnsBottom className="sns-component" />
        </div>
    );
}
