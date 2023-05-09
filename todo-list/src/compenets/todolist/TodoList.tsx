import React, { useState, useEffect } from 'react';
import TodoEmpty from '../todoEmpty/TodoEmpty';
import Todo from '../todo/Todo';
import Input from '../input/Input';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<{ text: string; completed: boolean; }[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos(prevTodos => [...prevTodos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (index: number) => {
        debugger
        setTodos(prevTodos => prevTodos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className={styles.container}>
            <Input
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                addTodo={addTodo}
            />
            <div className={styles.statsContainer}>
                <p className={styles.leftText}>Tarefas: {todos.length}</p>
                <p className={styles.rightText}>Concluídas: {todos.filter(todo => todo.completed).length}</p>
            </div>
            <div className={styles.todoContainer}>
                {todos.length === 0 ? (
                    <TodoEmpty />
                ) : (
                    todos.map((todo, index) => <Todo key={index} text={todo.text} completed={todo.completed} onClick={() => toggleTodo(index)} onDelete={() => deleteTodo(index)} />)
                )}
            </div>
        </div>

    );
};

export default TodoList;
