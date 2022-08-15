import React from 'react';

const TodoList = ({ item, index }) => {
    return (
        <div className='todo-list'>
            <li>{item.task}</li>
        </div>
    );
};

export default TodoList;
