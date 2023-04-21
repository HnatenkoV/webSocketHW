import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export const wsContext = React.createContext({
  sendMessage: () => {},
  messages: [],
  emergency: [],
  status: false,
});

const WSProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [emergency, setEmergency] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://127.0.0.1:4000", {transports: ["websocket"],});
    newSocket.on("message", (msg) => setMessages((prevMessages) => [...prevMessages, msg]));
    newSocket.on("emergency", (msg) => setEmergency(msg));

    setSocket(newSocket);
    newSocket.on('ping', (msg) => console.log('пришел пинг', msg));
    // newSocket.on("connect", () => setStatus(true));  // handlers if needed
    // newSocket.on("disconnect", () => setStatus(false));

    return () => newSocket.close(); // close connection when unmount
  }, []);

  const getSocketStatus = () => !!socket?.connected;

  const sendMessage = (msg) => {
    if (!getSocketStatus()) return false;
    socket.emit("message", { message: msg });
    return true;
  };

  const getContextValue = () => ({
    status: getSocketStatus(),
    messages,
    emergency,
    setEmergency,
    sendMessage,
  });

  return (
    <wsContext.Provider value={getContextValue()}>
      {children}
    </wsContext.Provider>
  );
};

export default WSProvider;
