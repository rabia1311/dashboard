import Sidebar from "../src/components/Sidebar/Sidebar"
import './App.css';
import MainDash from "./components/Maindash/MainDash";
import Topic from "../src/components/Topic/Topic";
function App() {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<MainDash/>
<Topic/>
      </div>  
    </div>
  );
}

export default App;
