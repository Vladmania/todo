import React from "react";
import { FooterTodo ,DivApp } from './Style'
import {v4} from "uuid"



export class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          newItem: '',
          list:[],
          filter: 'all',
        }
      }
      updateInput(key, value){
        this.setState({
          [key]: value
        })
    }
  
    
    addItem(){
      const newItem = {
        id: v4(),
        value: this.state.newItem,
        status: false,  
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: "",
      })
    }
     
    doneTodo(id){
      const todoIndex = this.state.list.findIndex(item => item.id === id);
      const todo = this.state.list;
      todo[todoIndex].status = !todo[todoIndex].status;
      this.setState({
        todos: [...this.state.list]
      });
    }
    
    deleteItem(id){
      const list = [...this.state.list]
      const updatedList = list.filter(item => item.id !== id);
  
      this.setState({list: updatedList});
    }
  
    itemLeft(){
      const item = this.state.list.filter(item => item.status === false);
      return item.length
    }
    checkItem(){
      const item = this.state.list.filter(item => item.value === item.value);
      return item.length
    }
    checkСompleted(){
      const item = this.state.list.filter(item => item.status === true);
      return item.length
    }
    clearCompleted(){
         const list = [...this.state.list];
         const filtersActive = list.filter(item => item.status === false); 
         this.setState({list: filtersActive}) 
    }
    activeItem(){
      const list = [...this.state.list];
      const filtersActive = list.every(item => item.status === true); 
      return filtersActive
    }
  
    filter(filter){
    this.setState({filter})
  }
  
    filterItem(item){
      switch(this.state.filter){
        case 'completed':
         return item.status
        case 'all':
          return true;
        case 'active':
          return !item.status;  
      }    
    }
    
      
    render(){
        return(
            <><DivApp className="App">
            <input
                  className ="InputTodo"
                  placeholder="What needs to be done?"
                  value= {this.state.newItem}
                  onChange={(e) => this.updateInput("newItem" ,e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" ? this.addItem(): ''} 
                  />
                           
                <ul className = 'ullist'>
                {this.state.list.map(item => {
                  
                   return (
                      
                      <> {this.filterItem(item) ? <li className = "lists" key={item.id}>
                        <div><input onChange={() => this.doneTodo(item.id)} className="checkboxTodo" type="checkbox"></input>
                        <label className={item.status ? "done" : ""}>{item.value}</label></div>
                        <button className = "todobutton" onClick={() => this.deleteItem(item.id)}>X</button>
                      </li>: ''}</>
                    );
                  })}
                  </ul>
                  </DivApp>
                  {this.checkItem() > 0 ? <FooterTodo className = "footer">
                <p className= "ItemLeft" >{this.itemLeft() + " item left"}</p>
                <div className ='collectionBtn'>
                <button className ="btn" onClick={() =>this.filter('all')}>All</button>
                <button className ="btn"  onClick ={()=>this.filter('active')}>Active</button>
                <button className ="btn"  onClick={()=> this.filter('completed')}>Completed</button>
                </div>
               
                 {this.checkСompleted() > 0 ? 
                 <p className ="clearCompleted" onClick ={()=> this.clearCompleted()}>{'Clear completed'+ "[" + this.checkСompleted() + "]"}</p>: ""}
                
              </FooterTodo>: ""}</>
        )
    }
}