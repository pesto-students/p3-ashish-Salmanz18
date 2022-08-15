import React from 'react';

const TodoList = ({ item, index, deleteTodoItem }) => {
    return (
        <div className='todo-list'>
            <li>{item.task}</li>
            <button onClick={() => deleteTodoItem(index)}>X</button>
        </div>
    );
};

export default TodoList;
