function Todos({todos, deleteTodo}) {
	return(
		<div>
			<ul>
				{todos.map(todo => <li key={todo.id}>{todo.name} <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button></li>)}
			</ul>
		</div>
	)
}

export default Todos;
