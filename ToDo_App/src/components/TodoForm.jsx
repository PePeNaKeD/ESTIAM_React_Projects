import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; 
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;