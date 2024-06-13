import { db } from "../conf/firebase";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function TodoInput() {
  const [title, setTitle] = useState("");

  async function writeTodo(e) {
    e.preventDefault();
    const todoRef = doc(collection(db, "todos"));
    const data = {
      id: todoRef.id,
      title: title,
      isDone: false,
      date: serverTimestamp(),
    };
    await setDoc(todoRef, data);
    setTitle("");
  }

  return (
    <form onSubmit={writeTodo}>
      <input
        type="text"
        placeholder="Write a todo.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
