import {
    ListItem, ListItemText, IconButton, Checkbox, TextField, Box
  } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  import SaveIcon from '@mui/icons-material/Save';
  import { useState } from 'react';
  import { useTodos } from '../context/TodoContext';
  
  export default function TodoItem({ todo }) {
    const { dispatch } = useTodos();
    const [isEditing, setEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
  
    const toggle = () => dispatch({ type: 'TOGGLE', payload: todo.id });
    const remove = () => dispatch({ type: 'DELETE', payload: todo.id });
    const save = () => {
      dispatch({ type: 'UPDATE', payload: { id: todo.id, text: newText } });
      setEditing(false);
    };
  
    return (
      <ListItem
        secondaryAction={
          <Box display="flex" alignItems="center">
            <IconButton onClick={remove}><DeleteIcon /></IconButton>
            {isEditing ? (
              <IconButton onClick={save}><SaveIcon /></IconButton>
            ) : (
              <IconButton onClick={() => setEditing(true)}><EditIcon /></IconButton>
            )}
          </Box>
        }
      >
        <Checkbox checked={todo.isActive} onChange={toggle} />
        {isEditing ? (
          <TextField
            variant="standard"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <ListItemText
            primary={todo.text}
            sx={{ textDecoration: todo.isActive ? 'line-through' : 'none' }}
          />
        )}
      </ListItem>
    );
  }
  