import React, { useEffect, useState } from 'react'

function App() {
  const[todos,setTodos]=useState([])
  const[task,setTask]=useState("")
const[date,setDate]=useState("")
const[togglebtn,setTogglebtn]=useState(true)
const[edit,setEdit]=useState(null)
const[search,setSearch]=useState("")
const[searchResult,setSearchresult]=useState(null)
const[error,setError]=useState(null)
  const handleSubmit=()=>{
  if(!task){
    setError("please fill task")
    return;
  }else if(!date){
    setError("please fill date")
    return
  }
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
  setError(null)
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
const SearchData=(task)=>{
    let searchdata=todos.find((element)=>{
   return element.task===task;
    })
    setSearchresult(searchdata)
}


const getTodayDate = new Date().toISOString().split('T')[0]
  return (
    <div>
      <div className="container">
       <h2>Todo-List</h2>
  
  <button  button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Task</button>

  <input type="search" onChange={(e)=>setSearch(e.target.value)} value={search} />
  <button onClick={()=>SearchData(search)}>search</button>
  
             {searchResult ? (
               <ul>
               <li className="list-group-item" >
              {searchResult.task}- {searchResult.date}
             
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><i className="bi bi-three-dots-vertical"></i>
             </button>
             <ul className="dropdown-menu">
             <li><button onClick={()=>editData(searchResult.id)} className="btn btn-info btn-sl"  data-toggle="modal" data-target="#myModal">Edit</button></li>
           <li><button className="btn btn-info btn-sl"  onClick={()=>deletedata(searchResult.id)}>Delete</button></li>
          </ul>
            </li>
            </ul>
             ):(todos.map((todo)=>{
            return <ul>
               <li className="list-group-item" >
              {todo.task}- {todo.date}
             
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><i className="bi bi-three-dots-vertical"></i>
             </button>
             <ul className="dropdown-menu">
             <li><button onClick={()=>editData(todo.id)} className="btn btn-info btn-sl"  data-toggle="modal" data-target="#myModal">Edit</button></li>
           <li><button className="btn btn-info btn-sl"  onClick={()=>deletedata(todo.id)}>Delete</button></li>
  </ul>
            </li>
            </ul>
          }))
        }
        

  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
 
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Add task</h4>
        </div>
        <div className="modal-body">
            <label>Task</label><br/>
            <input type="text" name="task" className="" onChange={(e)=>setTask(e.target.value)} value={task}/>
            <br/>
            <label>Date</label><br/>
            <input type="date" name="date" min={getTodayDate}  onChange={(e)=>setDate(e.target.value)} value={date}/>
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
