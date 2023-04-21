import "./App.css";
import WSProvider, { wsContext } from "./providers/wsProvider";
import WsDemo from "./components/wsDemo";
import EmergencyWindow from "./components/emergWindow";
import ConnectStatus from "./components/connectStatus";



const App = () => (
  <WSProvider>
    <WsDemo/>
      <EmergencyWindow/>
      <ConnectStatus/>
  </WSProvider>
);

export default App;
