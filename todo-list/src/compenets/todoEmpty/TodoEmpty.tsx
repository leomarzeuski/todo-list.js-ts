import React from 'react';
import styles from './TodoEmpty.module.css';

const TodoEmpty: React.FC = () => {
    return (

        <div className={styles.teste}>
            <div className={styles.container}>
                <h3>Adicione tarefas no seu to-do.</h3>
                <h4>Você pode ter um impulso de 1000% na sua produtividade.</h4>
            </div>
        </div>

    );
};

export default TodoEmpty;