import './App.css';
import React from 'react';
import { Header } from './Header';
import { Todolist } from './TodoList'


class App extends React.Component{

  render() {
    return(     
      <><Header />       
      <Todolist />         
        </>    
    );
  }
}

  
export default App;