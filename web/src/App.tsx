import { useState } from "react";
import "./App.css";
import { Chat } from "./shared/components/chat/Chat";
import { Join } from "./shared/components/join/Join";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Chat />
      <Join />
    </div>
  );
}

export default App;
