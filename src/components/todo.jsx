import { useState } from "react";
import { db } from "../conf/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

export default function Todo({ todo }) {
  const [modal, setModal] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  async function removeTodo() {
    if (confirm("삭제하시겠습니까")) {
      await deleteDoc(doc(db, "todos", todo.id));
    }
  }

  async function handleChange() {
    const todoRef = doc(db, "todos", todo.id);
    await updateDoc(todoRef, {
      isDone: !todo.isDone,
    });
  }

  function cancleTodo() {
    setModal(!modal);
    setNewTitle(todo.title);
  }

  async function editTodo() {
    const todoRef = doc(db, "todos", todo.id);
    await updateDoc(todoRef, {
      title: newTitle,
    });

    setModal(!modal);
  }

  return (
    <>
      <div className="todo_item">
        <input type="checkbox" checked={todo.isDone} onChange={handleChange} />{" "}
        <span className={todo.isDone ? "done" : ""}>{todo.title}</span>
        <div className="btns">
          <button onClick={() => setModal(!modal)}>수정</button>
          <button onClick={removeTodo}>삭제</button>
        </div>
      </div>

      <div className={modal ? "modal show" : "modal"}>
        <div className="inner">
          <h2>수정</h2>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <div className="btns">
            <button onClick={cancleTodo}>취소</button>
            <button onClick={editTodo}>확인</button>
          </div>
        </div>
      </div>
    </>
  );
}
