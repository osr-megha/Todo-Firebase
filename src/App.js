import React, { useEffect, useState } from 'react'
import './App.css';
import {TextField, Button} from '@material-ui/core';
import {db} from './firebase_config';
import firebase from 'firebase';
import TodoListItem from './Todo';



function App() {

  const [todoInput, setTodoInput] = useState('');

  const [todos, setTodos] = useState([]);

  useEffect(() => {
   getTodos();
  }, [])  // blank array to run the useEffect function only once on first launch

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })

    setTodoInput("");
  }

  const getTodos = () => {

    db.collection("todos").onSnapshot(function(querySnapshot){

      setTodos(

      querySnapshot.docs.map((doc) => ({

        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
        //timestamp: doc.data().serverTimestamp;

      })

      )

    );

    });

  }


  return (
    <React.Fragment>
    <div className="App">

    <h1> To Do Firebase React App 🔥</h1>
    <form>

    <TextField 
      id="standard-basic" 
      label="Write here" 
      value={todoInput}
      onChange={(e) => setTodoInput(e.target.value)}/>
    
      <Button type="submit" variant="contained" onClick={addTodo} style={{display:"none"}}>Default</Button>
    </form>
    <div className="new">
    { 
      todos.map((todo) => (
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/> // todo.todo denotes the test msg
      ))
    }

    </div>
    </div>

    
    </React.Fragment>
  );
}

export default App;
