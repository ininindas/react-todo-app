import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./conf/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Header from "./components/header";
import TodoInput from "./components/todo-input";
import Todos from "./components/todos";
import TodoBottom from "./components/todo-bottom";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push(doc.data());
      });
      setTodos(todos);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="container">
      <Header />
      <TodoInput />
      <Todos />
      <TodoBottom />
    </div>
  );
}
