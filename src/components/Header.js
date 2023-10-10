import React, { useContext } from 'react';
import { ToggleContext } from '../store/ToggleContext';
import CategoryToggleBtn from './headerComponents/CategoryToggleBtn';
import Logo from './headerComponents/Logo';
import Category from './headerComponents/Category';
import './styles/header.css';
import SnsTop from './headerComponents/SnsTop';
import Wallet from './headerComponents/Wallet';

// const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

export default function Header() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <nav className={`header ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <Logo />
            <Category />
            <SnsTop />
            <CategoryToggleBtn />
            {/* {!isMobile && <Wallet />} */}
            <Wallet />
        </nav>
    );
}
