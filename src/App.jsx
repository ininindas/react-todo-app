import "./App.css";

export default function App() {
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
        <div className="todo_item">
          <input type="checkbox" name="" id="" />
          안녕하세요
          <div className="btns">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div className="todo_item">
          <input type="checkbox" name="" id="" />
          안녕하세요
          <div className="btns">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div className="todo_item">
          <input type="checkbox" name="" id="" />
          안녕하세요
          <div className="btns">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </div>

      <div className="todo_botton">
        <div></div>
      </div>
    </>
  );
}
