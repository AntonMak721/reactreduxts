import React from 'react';
import UserList from './components/UserList';
import ToDoList from './components/ToDoList';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='wrapper'>
        <h1 className='title'>List of users and toDo's</h1>
        <h2 className='subtitle'>The app use such technology like React, Redux and of course TypeScript. </h2>
        <p className='paragraph'>The data is taken from a third-party server according to the provided API.</p>
      </div>
      
      <span>List of Users:</span>
      <UserList/>
      <span>List of toDo:</span>
      <ToDoList/>
    </div>
  );
};

export default App;