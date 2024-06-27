import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

function App() {
  const[todos,setTodos]=useState([])
  const[task,setTask]=useState("")
const[date,setDate]=useState("")
const[togglebtn,setTogglebtn]=useState(true)
const[edit,setEdit]=useState(null)

  const handleSubmit=()=>{
  
    if(task,date && !togglebtn){
      setTodos(todos.map((element)=>{
       if(element.id===edit){
        return{...element,task,date}
       }
       return element;
      }))
      setTogglebtn(true)
      setTask('')
      setDate('')
      setEdit(null)
    }
    else{
      const inputdata = { id: new Date().getTime().toString(), task, date };
    setTodos([...todos,inputdata])

    setTask('')
    setDate(' ')
  }
    }
  const deletedata=(id)=>{
  const updateitem=todos.filter((val,index)=>{
return val.id!==id
  })
  setTodos(updateitem)
  }
  const editData=(id)=>{
    let newData=todos.find((element)=>{
      return element.id===id
    })
    setTogglebtn(false)
    setTask(newData.task)
    setDate(newData.date)
    setEdit(id)
  }
useEffect(()=>{
localStorage.setItem("todos",json.stringify(todos))
},[todos])
  return (
    <div>
      <div className="container">
       <h2>Todo-List</h2>
  
  <button  button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Task</button>
  
  
      
          {todos.map((todo)=>{
            return<li className="list-group-item" >
              {todo.task}- {todo.date}
          
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><i className="bi bi-three-dots-vertical"></i>
             </button>
             <ul className="dropdown-menu">
             <li><button onClick={()=>editData(todo.id)} className="btn btn-info btn-sl"  data-toggle="modal" data-target="#myModal">Edit</button></li>
           <li><button className="btn btn-info btn-sl"  onClick={()=>deletedata(todo.id)}>Delete</button></li>
  </ul>
            </li>
        
          })}
      
  

  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
 
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Add task</h4>
        </div>
        <div className="modal-body">
            <label>Task</label><br/>
            <input type="text" name="task" className="" onChange={(e)=>setTask(e.target.value)} value={task} />
            <br/>
            <label>Date</label><br/>
            <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} value={date}/>
            <br/>
        </div>
        <div className="modal-footer">
          {togglebtn?
          <button type="button" onClick={handleSubmit} className="btn btn-default" data-dismiss="modal">Save</button>
          :<button type="button" onClick={handleSubmit} className="btn btn-default" data-dismiss="modal">Update</button>
}
        </div>
      </div>
      
    </div>
  </div>
  
</div>
    </div>
  )
}

export default App
