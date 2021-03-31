import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

function App() {
    const componentTodoItems = todosData.map(item => <TodoItem key ={item.id} item={item}/>)
    return (
        <div className="todo-list">
            {componentTodoItems}
        </div>
    )
}

export default App