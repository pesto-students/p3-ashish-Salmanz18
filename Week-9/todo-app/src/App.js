import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
    const [todoItems, setTodoItems] = useState([
        { task: 'Learn Fundamentals', completed: false },
        { task: 'Practice DSA', completed: false },
        { task: 'Make Projects', completed: false },
    ]);

    const createTodoItem = (task) => {
        const newTodoList = [...todoItems, { task, completed: false }];
        setTodoItems(newTodoList);
    };

    const deleteTodoItem = (index) => {
        const newTodoList = [...todoItems];
        newTodoList.splice(index, 1);
        setTodoItems(newTodoList);
    };

    return (
        <div className='App'>
            Todo-App
            <AddTodo createTodoItem={createTodoItem} />
            {todoItems.map((item, index) => (
                <TodoList
                    key={index}
                    index={index}
                    item={item}
                    deleteTodoItem={deleteTodoItem}
                />
            ))}
        </div>
    );
}

export default App;
