import React, { lazy, Suspense, useContext } from 'react';
import { ToggleContext } from '../store/ToggleContext';
import CategoryToggleBtn from './headerComponents/CategoryToggleBtn';
import Logo from './headerComponents/Logo';
import Category from './headerComponents/Category';
import SnsTop from './headerComponents/SnsTop';
import { SyncLoader } from 'react-spinners';
import './styles/header.css';

const Wallet = lazy(() => import('./headerComponents/Wallet'));

export default function Header() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <nav className={`header ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <Logo />
            <Category />
            <SnsTop />
            <CategoryToggleBtn />
            {typeof window.ethereum !== 'undefined' && (
                <Suspense
                    fallback={
                        <div className="loading">
                            <SyncLoader color={'#36d7b7'} size={7} />
                        </div>
                    }
                >
                    <Wallet />{' '}
                </Suspense>
            )}
        </nav>
    );
}
