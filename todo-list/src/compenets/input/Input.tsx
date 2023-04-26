import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    inputValue: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addTodo: () => void;
}

const Input: React.FC<InputProps> = ({ inputValue, handleInputChange, addTodo }) => {
    return (
        <div className={styles.container}>
            <input
                className={styles.Input}
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className={styles.Button} onClick={addTodo}>
                Criar
            </button>
        </div>
    );
};

export default Input;
