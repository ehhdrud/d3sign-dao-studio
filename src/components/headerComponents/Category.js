import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ToggleContext } from '../../store/ToggleContext.js';
import './styles/category.css';

export default function Category() {
    const location = useLocation();
    const { deleteCategoryLayout, categoryLayoutChanged } = useContext(ToggleContext);

    const handleClick = (event) => {
        deleteCategoryLayout(event);
    };

    return (
        <nav className={`category ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <div className="category-items">
                <div className="category-item">
                    <Link
                        className={`link ${
                            location.pathname.startsWith('/whatson') ? 'visited' : ''
                        }`}
                        to="/whatson"
                        onClick={handleClick}
                    >
                        <span className="category-text">What's on</span>
                    </Link>
                </div>
                <div className="category-item">
                    <Link
                        className={`link ${
                            location.pathname.startsWith('/artsandartists') ? 'visited' : ''
                        }`}
                        to="/artsandartists"
                        onClick={handleClick}
                    >
                        <span className="category-text">Arts and artists</span>
                    </Link>
                </div>
                <div className="category-item">
                    <Link
                        className={`link ${
                            location.pathname.startsWith('/marketplace') ? 'visited' : ''
                        }`}
                        to="/marketplace"
                        onClick={handleClick}
                    >
                        <span className="category-text">Marketplace</span>
                    </Link>
                </div>
                <div className="category-item">
                    <Link
                        className={`link ${location.pathname.startsWith('/faq') ? 'visited' : ''}`}
                        to="/faq"
                        onClick={handleClick}
                    >
                        <span className="category-text">FAQ</span>
                    </Link>
                </div>
            </div>
            <div className="transparent-space" onClick={handleClick}></div>
        </nav>
    );
}
