export default function TodoBottom({ todos }) {
  return (
    <div className="todo_bottom">
      <div>
        전체 <span>{todos.length}</span>
      </div>
      <div>
        완료한 일{" "}
        <span>{todos.filter((todo) => todo.isDone === true).length}</span>
      </div>
      <div>
        남은 일{" "}
        <span>{todos.filter((todo) => todo.isDone === false).length}</span>
      </div>
    </div>
  );
}
