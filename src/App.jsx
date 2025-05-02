import {
  Box, Container, Typography, LinearProgress, Paper,
} from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodos } from './context/TodoContext';

export default function App() {
  const { state } = useTodos();
  const completed = state.todos.filter(t => t.isActive).length;
  const total = state.todos.length;
  const percent = total ? (completed / total) * 100 : 0;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 5, p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          📝 MUI Todo List
        </Typography>
        <TodoForm />
        <Box mt={3}>
          <LinearProgress variant="determinate" value={percent} />
          <Typography mt={1} variant="body2" align="center">
            {completed} of {total} completed
          </Typography>
        </Box>
        <TodoList />
      </Paper>
    </Container>
  );
}
