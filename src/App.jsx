import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [togglebtn, setTogglebtn] = useState(true);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchresult] = useState(null);
  const [searchDate, setSearchDate] = useState("");

  const handleSubmit = () => {
    if (task && date && !togglebtn) {
      setTodos(todos.map((element) => {
        if (element.id === edit) {
          return {...element,task,date};
        }
        return element;
      }));
      setTogglebtn(true);
      setTask("");
      setDate("");
      setEdit(null);
    
   } else {
      const inputdata = { id: new Date().getTime().toString(), task, date };
      setTodos([...todos, inputdata]);
      setTask("");
      setDate("");
    }
  };

  const deletedata = (id) => {
    const updateitem = todos.filter((element) => {
      return element.id !== id;
    });
    setTodos(updateitem);
  };

  const editData = (id) => {
    let newData = todos.find((element) =>{
      return element.id === id
    })
    setTogglebtn(false);
    setTask(newData.task);
    setDate(newData.date);
    setEdit(id);
  };

  const SearchData = () => {
    let searchResults = todos.filter((element) => {
      if(element.id ==search) {
        return element;
      } else {
        return element.task.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    setSearchresult(filterItem);
  };
  const SearchDate = () => {
    let searchdate = todos.filter((element) => {
      return element.date.includes(searchDate);
    });
    setSearchresult(searchdate);
    setTogglebtn(false);
  };

  const cancelSearch = () => {
    setSearchresult(null);
    setSearch("");
    setSearchDate("");
    setTogglebtn(true);
  };

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className="container">
              <h2>Todo-List</h2>
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Task</button>
           <div className="btn-search">
          <input type="search" value={search}  onChange={(e) => setSearch(e.target.value)}/>
          {togglebtn ?
            <button className="btn btn-primary" onClick={SearchData}>Search</button>
            :<button className="btn btn-secondary" onClick={cancelSearch}>
              Cancel
            </button>
}
        </div>

        <table className="table">
          <tr>
            <th>Task Name</th>
            <th>Task Date</th>
            <th>Action</th>
          </tr>

          <tbody>
            {searchResult ? (
              searchResult.map((result) =>{
               return <tr>
                  <td>{result.task}</td>
                      <td>{result.date}</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                          ></button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                onClick={() => editData(result.id)}
                                className="btn btn-info btn-sm"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn btn-info btn-sm"
                                onClick={() => deletedata(result.id)}
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : todos.map((todo) => {
                  return (
                    <tr>
                      <td>{todo.task}</td>
                      <td>{todo.date}</td>
                      <td>
                       
                        <div className="dropdown">
                          <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                          ></button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                onClick={() => editData(todo.id)}
                                className="btn btn-info btn-sl"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn btn-info btn-sl"
                                onClick={() => deletedata(todo.id)}
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Add task</h4>
              </div>
              <div className="modal-body">
                <label>Task</label>
                <br />
                <input
                  type="text"
                  name="task"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                  required
                />
                <br />
                <label>Date</label>
                <br />
                <input
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  required
                />
                <br />
              </div>
              <div className="modal-footer">
                {togglebtn ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;