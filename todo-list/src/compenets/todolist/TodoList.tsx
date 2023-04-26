import React, { useState, useEffect } from 'react';
import TodoEmpty from '../todoEmpty/TodoEmpty';
import Todo from '../todo/Todo';
import Input from '../input/Input';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos(prevTodos => [...prevTodos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className={styles.container}>
            <Input
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                addTodo={addTodo}
            />
            <div className={styles.todoContainer}>
                {todos.length === 0 ? (
                    <TodoEmpty />
                ) : (
                    todos.map((todo, index) => <Todo key={index} text={todo} />)
                )}
            </div>
        </div>
    );
};

export default TodoList;
