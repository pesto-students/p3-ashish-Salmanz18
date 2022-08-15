import React, { useState } from 'react';

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
        <form>
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
