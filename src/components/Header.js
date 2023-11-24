import React, { useContext } from 'react';
import { ToggleContext } from '../store/ToggleContext';
import CategoryToggleBtn from './headerComponents/CategoryToggleBtn';
import Logo from './headerComponents/Logo';
import Category from './headerComponents/Category';
import './styles/header.css';
import SnsTop from './headerComponents/SnsTop';
import Wallet from './headerComponents/Wallet';

export default function Header() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <nav className={`header ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <Logo />
            <Category />
            <SnsTop />
            <CategoryToggleBtn />
            {typeof window.ethereum !== 'undefined' && <Wallet />}
        </nav>
    );
}
