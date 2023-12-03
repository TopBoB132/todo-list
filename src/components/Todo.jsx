import { CornerUpLeft } from 'lucide-react'
import React, { useState ,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Todo.css'

export const Todo = () => 
{
    const { todoId } = useParams()
    const [todo, setTodo] = useState('')
    const navigate = useNavigate()
    
    useEffect(() => 
    {
      const todosInStorage = JSON.parse(localStorage.getItem('todos'))
      console.log(todosInStorage)
       if(todosInStorage)
       {
         const selectedTodo = todosInStorage[todoId]
         if(selectedTodo)
         {
             setTodo(selectedTodo)
         }
       }
    
    }, [])
    

    return (
     <div className='container'>
      <h3 className='todo-title'>{todo}</h3>
      <CornerUpLeft className='back-icon'
      onClick={() => navigate(-1)}/>
      </div>
    )
}
