import { IoIosSave } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useTodo } from "../Context";
import { useState } from "react";

function ToDoItem({todo}){

  const [isToDoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo,toggleComplete}=useTodo()

  const editTodo=()=>{
    updateTodo(todo.id,{...todo, todo:todoMsg}) // destructing todo and passing the new todomsg
    setIsTodoEditable(false)
  }

  const toggleCompleted=()=>{
    toggleComplete(todo.id)
  }
    return(
       <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black   ${ todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" } `}>
        <input type="checkbox" 
        checked={todo.completed}
        onChange={toggleCompleted}/>
         <input
         type="text"
         className={` border w-full outline-none bg-transparent rounded-lg 
         ${isToDoEditable? "border-black/10 px-2" : "border-transparent"}
         ${todo.completed ? "line-through" :""} `}
         value={todoMsg}
         onChange={(e)=>setTodoMsg(e.target.value)}
         readOnly={!isToDoEditable}/>

        {/*  Edit and save button */}

        <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50"
        onClick={()=>{
          if(todo.isCompleted) return
          if(isToDoEditable) {
            editTodo()
          }
          else{
            setIsTodoEditable((prev)=>!prev)
          }
         
        }}
        disabled={todo.isCompleted}>
       {   isToDoEditable ? <IoIosSave /> :<FaEdit />}
        
        </button>
        {/* delete button*/}
        <button 
        className="inline-flex w-8 h-8 rounded-lg text-md border border-black/10 justify-center items-center bg-gray-50"
        onClick={()=>deleteTodo(todo.id)}>
        {<MdDeleteForever />}
        </button>
       </div>
     
    
    )
}
export default ToDoItem;