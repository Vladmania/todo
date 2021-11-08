import React from "react";
import styled from 'styled-components';

const HeaderTodo = styled.header`
  text-align: center;
  position: relative;
   h1{
    width: 100%;
    font-size: 60px;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    text-rendering: optimizelegibility;
   }
`


export class Header extends React.Component{
    render(){
        return(
      <HeaderTodo >
        <h1>Todos</h1>
      </HeaderTodo>
        )
    }
}