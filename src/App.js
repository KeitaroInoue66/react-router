import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    // 下記の囲った配下でルーティングを有効化するという意味
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}

// Switch
// Switchというものはpage1のURLの時はPage1のコンポーネントを表示するなど
// 出しわけするためのものがSwitchになる.Switchの中にどのパスの中にどのコンポーネントを出すのかを記述する

// Route
// Switchの中でルートにマッチしたものを表示していくものがRoute
