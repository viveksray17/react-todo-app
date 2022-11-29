import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";

const TODO_STORAGE_KEY = "todoApp.todos"

function App() {
	const inputTodoRef = useRef();
	const [todos, setTodos] = useState(localStorage.getItem(TODO_STORAGE_KEY) ? JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) : []);

	function addTodo(){
		if(inputTodoRef.current.value === ""){
			alert("please enter a todo");
		}else{
			const newTodoObject = {name: inputTodoRef.current.value, id: uuidv4()}
			setTodos(prev => {
				return [...prev, newTodoObject]
			})
			inputTodoRef.current.value = "";
		}
	}

	function deleteTodo(id){
		setTodos(prev => {
			const newTodos = [...prev]
			const filteredTodos = newTodos.filter(todo => todo.id !== id)
			return filteredTodos
		})
	}
	useEffect(() => {
		localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
	}, [todos])

	return (
		<div>
			<input placeholder="enter todo" ref={inputTodoRef} />
			<button className="btn btn-primary btn-sm" onClick={addTodo}>Add Todo</button>
			<Todos todos={todos} deleteTodo={deleteTodo}/>
		</div>
	);
}

export default App;
