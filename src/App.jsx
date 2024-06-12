import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./conf/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function App() {
  const [todos, setTods] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notes = [];
      querySnapshot.forEach((doc) => {
        notes.push(doc.data());
      });
    });

    setTods(notes);
  }, []);

  return (
    <>
      <div className="header">
        <h1>🎃Todo</h1>
        <button>정보</button>
      </div>

      <form action="">
        <input type="text" placeholder="write a todo" />
      </form>

      <div className="todos">
        {todos.map(() => {
          <div className="todo_item" key={todos.id}>
            <input type="checkbox" name="" id="" />
            안녕하세요
            <div className="btns">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>;
        })}
      </div>

      <div className="todo_botton">
        <div></div>
      </div>
    </>
  );
}
