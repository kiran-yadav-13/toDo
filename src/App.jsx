import { useEffect, useState } from 'react'
import {TodoProvider } from "./Context"
import './App.css'

// import {AppLayout} from "./component/navbar/Navbar"
import ToDoForm from './component/ToDoForm'
import ToDoItem from './component/ToDoItem'

function App() {
   
   
const[todos,setTodos]=useState([])

const addTodo=(todo) => {
 //since we have to presrve the old list of todos while adding the new one so we are doing destructring of prev object [todo,...prev]
 // but the new todo have to be object having three property but the param one having 2 only so we will destructure it also [{id:Date.now(), ...todo},...prev]
 setTodos((prev) => [{id:Date.now(),...todo},...prev]);

}          // the todo in the parameter is one submitted from the form and the state todos have all the list of todos


const updateTodo=(todo,id) =>{
 setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id==id ? todo: prevTodo))
}


const deleteTodo=(id)=>{
 setTodos((prev)=>prev.filter((todo)=>todo.id!==id)) // only those todo whose id did not match
}


const toggleComplete=(id)=>{
 setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed}:prevTodo))
}


// to get the items already present
useEffect(()=>{
 // since local storage store and get into string format
 const todos=JSON.parse(localStorage.getItem("todos") )
 if(todos && todos.length>0){
   setTodos(todos)
 }
},[])

useEffect(()=>{
 localStorage.setItem("todos", JSON.stringify(todos))
},[todos])

// we can use more than 1 useEffect
// if we


 return (
   <>
   <TodoProvider value={{todos,addTodo,updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
     <div className="w-full max-w-2xl  mx-auto shadow-md rounded-lg px-4 py-3 text-white ">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your ToDos</h1>
        <div className="mb-4">
          <ToDoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
           {/* Loop and add todoItems here*/}
         {todos.map((todo)=>(
             <div 
             key={todo.id}
             className="w-full"
             >
               <ToDoItem todo={todo} />
             </div>
         ))}
        </div>
     </div>
    </div>
    </TodoProvider>
   </>
 )

}

export default App
