import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToggleContext } from '../../store/ToggleContext';
import './styles/logo.css';
// import logo from "../../images/logo.jpg";

export default function Logo() {
    const { categoryLayoutChanged } = useContext(ToggleContext);
    return (
        <Link className={`logo link ${categoryLayoutChanged ? 'rearranged' : ''}`} to="/">
            {/* <img src={logo} alt="D3sign DAO Studio" /> */}
            <span className="logo-text">D3sign DAO Studio</span>
        </Link>
    );
}
