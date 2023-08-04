import { useState } from 'react';
import './all.css';
const All=({handleAdd})=>{
    const [valueTask,setValueTask]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(valueTask !== "")
        {
            handleAdd(valueTask);
            setValueTask('');
        }
    }
    const handleValueTask=(e)=>{
        setValueTask(e.target.value);
    };
    return(
       
            <div >
                <form action="" onSubmit={handleSubmit}className='formAll' >
                <input type="text" value={valueTask} onChange={handleValueTask} placeholder='add details' className='input'/>
                <button type='submit' className='button'>add</button>
            </form>
            </div>
          
     
    )
}
export default All;