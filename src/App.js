
import All from './page/all/all';
import { ListTodo } from './page/active/active';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [dataTask,setDatTask]=useState([]);
  const handleAdd=(todo)=>{
    setDatTask([...dataTask,todo]);
    localStorage.setItem('data',JSON.stringify([...dataTask,todo]));
  };
  const loatTodo=()=>{
    const storedTodos=localStorage.getItem('data');
    if(storedTodos){
      setDatTask(JSON.parse(storedTodos));
    }
  }
  useEffect(()=>{
    loatTodo();
  },[]);
  const renderListTodo=dataTask?.map((item,index)=>{
    return <ListTodo keys={index} data={item}/>
  })
  

  return (
      
       <div className="App">
          <h1>#todo</h1>
          <div className='todoApp'>
            <p className='ph'>All</p>
            <p  className='ph'>Active</p>
            <p  className='ph'>Completed</p>
          </div>
          <All handleAdd={handleAdd}/>
        <div>
          { renderListTodo}
          </div> 
         
    </div>
    
   
  );
}

export default App;
