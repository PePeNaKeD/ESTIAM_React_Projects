function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;