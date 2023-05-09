import React from 'react';
// import './CheckButton.module.css';

interface CheckButtonProps {
    toggleCheck: () => void;
    Checked: boolean;
}

const CheckButton: React.FC<CheckButtonProps> = ({ toggleCheck, Checked }) => {
    return (
        <button className={`styles.button ${Checked ? '✔' : ''}`} onClick={toggleCheck}>
            {Checked && <span>✔</span>}
        </button>
    );
};

export default CheckButton;
