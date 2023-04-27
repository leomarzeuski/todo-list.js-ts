import React, { useState } from 'react';
import styles from './Todo.module.css';
import CheckButton from '../checkbutton/checkbutton';

interface TodoProps {
    text: string;
    completed: boolean;
    onClick: () => void;
}

const Todo: React.FC<TodoProps> = ({ text, completed, onClick }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.container}>
            <CheckButton onClick={onClick} toggleCheck={toggleCheck} isChecked={isChecked} />
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
        </div>
    );
};

export default Todo;
