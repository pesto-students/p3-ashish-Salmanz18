import React from 'react';

const TodoList = ({ item, index, deleteTodoItem, completeTodoItem }) => {
    return (
        <div className='todo-list'>
            <li
                style={{
                    textDecoration: item.completed ? 'line-through' : '',
                }}>
                {item.task}
            </li>

            <div>
                <button onClick={() => completeTodoItem(index)}>Status</button>
                <button onClick={() => deleteTodoItem(index)}>X</button>
            </div>
        </div>
    );
};

export default TodoList;
