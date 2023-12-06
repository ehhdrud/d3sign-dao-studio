import React, { useContext } from 'react';
import { ToggleContext } from '../../store/ToggleContext.js';
import { BiMenu } from 'react-icons/bi';
import './styles/toggle.css';

export default function CategoryToggleBtn() {
    const { toggleCategoryLayout } = useContext(ToggleContext);

    const handleClick = () => {
        toggleCategoryLayout();
    };

    return (
        <div className="toggle toggle-container" onClick={handleClick}>
            <BiMenu className="toggle-icon" />
        </div>
    );
}
