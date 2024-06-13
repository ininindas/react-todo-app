export default function Todos({ todos }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo_item" key={todo.id}>
          <input type="checkbox" name="" id="" /> {todo.title}
          <div className="btns">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
}
