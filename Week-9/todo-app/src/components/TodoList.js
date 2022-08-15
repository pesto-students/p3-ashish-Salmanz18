import React from 'react';

function TodoList({ item, index }) {
    return (
        <div className='todo-list'>
            <li>{item.task}</li>
        </div>
    );
}

export default TodoList;
