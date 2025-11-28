import TodoItem from './TodoItem'


function TodoList({ todos }) {
if (!todos) return <p>No todos yet</p>
return (
<ul>
{todos.map((todo) => (
<TodoItem key={todo.id} todo={todo} />
))}
</ul>
)
}


export default TodoList