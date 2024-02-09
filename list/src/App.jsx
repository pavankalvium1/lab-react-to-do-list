import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== -1) {
        const newTodos = [...todos];
        newTodos[editIndex] = inputValue;
        setTodos(newTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const startEditing = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>{editIndex !== -1 ? 'Update' : 'Add'}</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div className="buttons">
              <button onClick={() => startEditing(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;