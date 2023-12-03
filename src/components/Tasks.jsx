import React, { useEffect, useState } from 'react';
import './tasks.css';
import { Check, Pencil, Trash2, Loader2 } from 'lucide-react';
import {Link} from 'react-router-dom';
import { wait } from '../lib/utils';
import { success } from '../lib/notification';
//import { useEffect } from 'react';

export const Tasks = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState(-1);
  const [onClickCheck, setOnClickCheck] = useState(false);

  useEffect(() => {
    const todosInStorage = JSON.parse(localStorage.getItem('todos'))
    if(todosInStorage)
    {
      setTodos(todosInStorage);
    }
  }, [todo])
  
  const handleAddTodo = async () => 
  {
    if(!todo ) return;

    setOnClickCheck(true)
    await wait(2000)

    try 
    {
      if(todoIndex > -1)
      {
        todos[todoIndex] = todo;
        setTodoIndex(-1);
        localStorage.setItem('todos', JSON.stringify(todos))
        success("Task updated successfully")   
      }
      else
      {
        const allTodos = [...todos, todo]
        localStorage.setItem('todos', JSON.stringify(allTodos))   
        success("Task added successfully")   
      }  

      setTodo(''); // Clear the input field
    } 
    catch (error) 
    {
      error(error?.massage)
    }
    finally
    {
      setOnClickCheck(false)
    }

  }

  const handleDeleteTodo = (index) => 
  {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleUpdateTodo = (index) => 
  {
    setTodo(todos[index]);
    setTodoIndex(index);
    console.log(todos[index])
  }

  return (
    <div className='container'>
      <div>
        <input
          className='task-input'
          value={todo}
          onChange={({target}) => setTodo(target.value)}
          type="text"
          placeholder="Add a new task"
          disabled={onClickCheck}
          onKeyDown={(event) => {
            if(event.key === 'Enter')
            {
              handleAddTodo()
            }
          }}
        />
        
        {!onClickCheck ? (<Check
          className='task-icon'
          onClick={handleAddTodo}
          style={{cursor: todo ? 'pointer' : 'not-allowed'}}/>
          ) : (
            <Loader2 className='task-icon loading'/>
          )}
      </div>

      <div className='todos-wrapper'>
        {todos?.map((todo, index) => (
          <div className='todo-item' key={index}>
            <Link to={`/todo/${index}`} className='todo-link'>
              <span style={{opacity: todoIndex === index  ? 0.5 : 1}}>
                {index + 1}. {todo}
              </span>
            </Link>

            <div>
              <Trash2 className='trash-icon'
              onClick={() => handleDeleteTodo(index)}
              />

              <Pencil className='pencil-icon'
              onClick={() => handleUpdateTodo(index)}
              />
            </div>
        </div>
        ))}
        <div className='todo-item'>
          {(todoIndex === -1 && onClickCheck) && <span style={{opacity: 0.5}}>
            {todos.length + 1}. {todo}
          </span>}
        </div>
      </div>
    </div>
  )
}