import React, { useState } from 'react';
import './App.css';

function Todo({todo, index}) {
    return (
        <div className="todo">
            {todo.description }
        </div>
    )
}

function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" placeholder="Add todos here...." value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}


function Todos() {
    const [todos, setTodos] = useState([
        {
            description: "Finish Mandla's app",
            status: false
        }
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }
    console.log("Hellow", addTodo)
    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} />
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default Todos;