import React, { useRef, useState } from 'react';
import Card from './components/Card';
import './App.css'
const App = () => {
  const todoValue = useRef();
  const [data, setData] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = todoValue.current.value.trim();
    if (newTodo) {
      setData([...data, newTodo]);
      todoValue.current.value = '';
    } else {
      alert("Please add text before adding a todo!");
    }
  }

  const deleteTodo = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  const editTodo = (index, newValue) => {
    const newData = [...data];
    newData[index] = newValue;
    setData(newData);
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Todo App</h1>
      <form onSubmit={addTodo} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter Your Todo"
          ref={todoValue}
          style={{ padding: '8px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{ background: '#3498db', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none' }}
        >
          ADD TODO
        </button>
      </form>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card key={index} title={item} deleteTodo={() => deleteTodo(index)} editTodo={(newValue) => editTodo(index, newValue)} />
        ))
      ) : (
        <h3 style={{ color: '#777' }}>Todo Not Found</h3>
      )}
    </div>
  );
}

export default App;
