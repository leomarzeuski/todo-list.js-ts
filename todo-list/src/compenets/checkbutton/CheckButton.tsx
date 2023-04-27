import React from 'react';
import './CheckButton.module.css';

interface CheckButtonProps {
    toggleCheck: () => void;
    isChecked: boolean;
}

const CheckButton: React.FC<CheckButtonProps> = ({ toggleCheck, isChecked }) => {
    return (
        <div className={`styles.button ${isChecked ? 'checked' : ''}`} onClick={toggleCheck}>
            {isChecked && <span>✔</span>}
        </div>
    );
};

export default CheckButton;
