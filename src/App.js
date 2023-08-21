import Sidebar from "../src/components/Sidebar/Sidebar"
import './App.css';
import MainDash from "./components/Maindash/MainDash";
import Updates from "./components/Update/Updates";
function App() {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<MainDash/>
<Updates/>
      </div>  
    </div>
  );
}

export default App;
