import React, { useState } from 'react';
import '../App.css';

const AddTodo = ({ createTodoItem }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            return alert('Please Add your Todo');
        }
        createTodoItem(value);
        setValue('');
    };

    return (
        <form className='add-todo'>
            <input
                type='text'
                placeholder='Add Todo'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button onClick={handleSubmit}>Add</button>
        </form>
    );
};
export default AddTodo;
