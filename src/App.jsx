import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./conf/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoBottom from "./components/TodoBottom";
import Todos from "./components/Todos";

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
      <Todos todos={todos} />
      <TodoBottom todos={todos} />
    </div>
  );
}
