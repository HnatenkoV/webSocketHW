import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Raw WebSocket example
//
// const socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
//
// socket.onopen = (e) => {
//   console.log('Connection open');
//   socket.send('Hello web socket!');
// };
//
// socket.onmessage = (event) => {
//   console.log(`[message] Данные получены с сервера: ${event.data}`);
// };
//
// socket.onclose = (event) => {
//   if (event.wasClean) {
//     console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
//   } else {
//     console.log('[close] Соединение прервано');
//   }
// };
//
// socket.onerror = function(error) {
//   console.log(`[error]`);
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
