import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  //変数に何かしらの更新があった場合の監視をし、再レンダリングする

  return (
    <div>
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
