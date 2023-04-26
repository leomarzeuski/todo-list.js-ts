import React from 'react';
import styles from './Todo.module.css';

interface TodoProps {
    text: string;
}

const Todo: React.FC<TodoProps> = ({ text }) => {
    return (
        <div className={styles.container}>
            <p>{text}</p>
        </div>
    );

};

export default Todo;