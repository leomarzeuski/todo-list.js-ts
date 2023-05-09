import React, { useState } from 'react';
import styles from './Todo.module.css';
import CheckButton from '../checkbutton/CheckButton';

interface TodoProps {
    text: string;
    completed: boolean;
    onClick: () => void;
    onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ text, completed, onClick, onDelete }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
        onClick();
    };

    return (
        <div className={styles.container}>
            <CheckButton toggleCheck={toggleCheck} Checked={isChecked} />
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
            <button onClick={onDelete} className={styles.deleteButton}>🗑️</button>
        </div>
    );
};

export default Todo;
