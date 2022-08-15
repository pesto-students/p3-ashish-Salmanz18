import React from 'react';
import '../App.css';

const TodoList = ({ item, index, deleteTodoItem, completeTodoItem }) => {
    return (
        <div className='todo-list'>
            <li
                style={{
                    textDecoration: item.completed ? 'line-through' : '',
                }}>
                {item.task}
            </li>

            <div className='btns'>
                <button onClick={() => completeTodoItem(index)}>Status</button>
                <button onClick={() => deleteTodoItem(index)}>X</button>
            </div>
        </div>
    );
};

export default TodoList;
