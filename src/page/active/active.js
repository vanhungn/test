import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import "./active.css"
export const ListTodo=(prop)=>{
  const  {keys,data}=prop
    return (
            <div className="listtodo">
                <div className='product'>
                       <p key={keys} className='p'>{data}</p>
                       <FontAwesomeIcon icon={faTrash} className='icon' />
                </div>
                 
            </div>
    )
}