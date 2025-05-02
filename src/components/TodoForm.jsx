import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useTodos } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: 'ADD',
        payload: {
          id: Date.now(),
          text,
          isActive: false,
        },
      });
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2}>
      <TextField
        fullWidth
        label="Enter todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}
