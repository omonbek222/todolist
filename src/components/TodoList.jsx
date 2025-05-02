import { List } from '@mui/material';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { state } = useTodos();

  return (
    <List>
      {state.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}
