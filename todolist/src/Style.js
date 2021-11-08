import styled from 'styled-components'



export const DivApp = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 25px 50px 0px;
  .InputTodo{
    padding: 16px 16px 16px 60px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: rgba(0, 0, 0, 0.004);
    position: relative;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;   
    box-sizing: border-box;    
    margin: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(153, 153, 153);
    border-image: initial;
  }
  .ullist{
    padding: 0;
  }
  .lists{
    display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 24px;
  padding: 10px 10px 15px 10px;
  border-bottom: rgba(53, 50, 50, 0.39) ridge 1px ;
  }
  .todolist{
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 24px;
    padding: 10px 10px 15px 10px;
    border-bottom: rgba(53, 50, 50, 0.39) ridge 1px ;
  }
  .todobutton{
    background: none;
    border: none;
    color: red;
    cursor: pointer;
  }
`
export const FooterTodo = styled.footer`
   box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px, rgb(246, 246, 246) 0px 8px 0px -3px,
   rgba(0, 0, 0, 0.2) 0px 9px 1px -3px, rgb(246, 246, 246) 0px 16px 0px -6px, 
   rgba(0, 0, 0, 0.2) 0px 17px 2px -6px;
   .ItemLeft{
    color: rgba(65, 62, 62, 0.726);
    display: flex;
    justify-content: start;
    margin: 0 0 -43px 10px;
   }
   .collectionBtn{
    text-align: center;
  margin: 20px 0 0 0;
  padding: 0 0 10px;
  @media(max-width: 430px){
    margin: 50px 0 0 0;
     }
   }
   .btn{
    color: rgba(65, 62, 62, 0.726);
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
      border: rgba(175, 47, 47, 0.1) ridge 1px;
    }
   }
   .clearCompleted{
    color: rgba(65, 62, 62, 0.726);
    display: flex;
    justify-content: end;
    padding: 0 10px 20px 0;
    margin: -32px 0 0 0;
  @media(max-width: 430px){
    margin: -58px 0 0 0;
    padding: 0 10px 50px 0;
  }
   }`
