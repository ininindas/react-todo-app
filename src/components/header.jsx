import { useState } from "react";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="header">
        <h1>🎃 Todo</h1>
        <button onClick={() => setModal(!modal)}>정보</button>
      </div>

      <div className={modal ? "modal show" : "modal"}>
        <div className="inner">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            tempore vero corporis quisquam delectus accusamus assumenda tempora
            ratione quos veniam inventore commodi voluptas ea, fugit quam dolor!
            Provident, cum molestiae?
          </p>
          <button onClick={() => setModal(!modal)}>닫기</button>
        </div>
      </div>
    </>
  );
}
