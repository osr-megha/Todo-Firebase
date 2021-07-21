import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react';
import { db } from "./firebase_config";
//import CloseIcon from '@material-ui/icons/Close';

//import DeleteIcon from '@material-ui/icons/';

export default function TodoListItem({todo, inprogress, id}) {

    const toggleInProgress = () => {
        db.collection("todos").doc(id).update({
            inprogress:!inprogress
        })
    }

    const deleteTodo = () => {

        db.collection("todos").doc(id).delete();

    }

    return (
        <div style={{ display : "flex"}}>

        <ListItem>

        <ListItemText primary={todo} secondary={inprogress? "In Progress" : "Completed" }/>
        
        </ListItem>

        <Button onClick={toggleInProgress} > {inprogress? "Done" : "Undone" }</Button>

        <Button onClick={deleteTodo}> × </Button>
        
        </div>
    )
}
