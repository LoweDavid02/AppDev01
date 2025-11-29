import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({ todos }){
if(!todos.length) return <p className="empty">No tasks yet.</p>
return (
<div className="todo-list">
{todos.map(t => <TodoItem key={t.id} todo={t} />)}
</div>
)
}