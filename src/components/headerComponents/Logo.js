import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToggleContext } from '../../store/ToggleContext';
import './styles/logo.css';

export default function Logo() {
    const { categoryLayoutChanged } = useContext(ToggleContext);
    return (
        <Link className={`logo link ${categoryLayoutChanged ? 'rearranged' : ''}`} to="/">
            <span className="logo-text">D3sign DAO Studio</span>
        </Link>
    );
}
