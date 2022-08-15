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
    return (
        <div className='App'>
            Todo-App
            <AddTodo />
            {todoItems.map((item, index) => (
                <TodoList key={index} index={index} item={item} />
            ))}
        </div>
    );
}

export default App;
