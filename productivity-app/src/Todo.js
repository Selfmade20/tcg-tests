import React, { useState } from 'react';
import './App.css';

function Todo({todo, index}) {
    return (
        <div className="todo">
            {todo.description }
        </div>
    )
}

function TodoFrom({addTodo}) {
    const [value, setValue] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Description</label>
            <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
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

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} />
                ))}
            </div>
        </div>
    )
}

export default Todos;