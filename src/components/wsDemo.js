import {useContext, useState} from "react";
import {wsContext} from "../providers/wsProvider";

const WsDemo = () => {
    const wsCtx = useContext(wsContext);
    const [inputMsg, setInputMsg] = useState("")

    const sendMessageHandler = () => {
        wsCtx.sendMessage(inputMsg);
    };

    const handleChange = ({target: {value}}) => setInputMsg(value);

    return (
        <div style={{margin:"30px"}}>
            <input className="send-input" type="text" value={inputMsg} onChange={handleChange}/>
            <button className="send-btn" onClick={sendMessageHandler}>Send</button>
            {wsCtx.messages.map((msg, index) => (
                <p key={`msg-${index}`}>{msg.message}</p>
            ))}
        </div>
    );
};

export default WsDemo;