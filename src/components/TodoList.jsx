import "./TodoList.css";
import { useState, useEffect } from "react";

const todoList = [
  { id: 1, task: "첫번째할일", isDone: false },
  { id: 2, task: "두번째할일", isDone: true },
  { id: 3, task: "세번째할일", isDone: false },
];

function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => isDoneToggle(todo.id)}
      />
      <span>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>✖️</button>
    </li>
  );
}

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [todoValue, setTodoValue] = useState("");

  function addTodo() {
    if (!todoValue.trim()) return;
    const newTodos = [
      ...todos,
      { id: Date.now(), task: todoValue.trim(), isDone: false },
    ];
    setTodos(newTodos);
    setTodoValue("");
  }

  function clearAll() {
    setTodos([]);
  }

  function isDoneToggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function clearCompleted() {
    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  }
  const remainingCount = todos.filter((todo) => !todo.isDone).length;
  const [showIncomplete, setShowIncomplete] = useState(false);

  const filteredTodos = showIncomplete
    ? todos.filter((todo) => !todo.isDone)
    : todos;

  return (
    <div className="container">
      <h1>📝 Todo List 할일</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />
        <button onClick={addTodo}>추가</button>
        <button onClick={clearCompleted}>완료 항목 삭제</button>
        <button onClick={clearAll}>전체 삭제</button>
      </div>
      <p>남은 할 일: {remainingCount}개</p>
      <button onClick={() => setShowIncomplete(!showIncomplete)}>
        {showIncomplete ? "전체 보기" : "미완료만 보기"}
      </button>

      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            isDoneToggle={isDoneToggle}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
