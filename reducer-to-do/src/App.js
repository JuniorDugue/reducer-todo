import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Reducer To Do List</h1>
      <TodoList />
    </div>
  );
}
export default App;