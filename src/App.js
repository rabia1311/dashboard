import Sidebar from "../src/components/Sidebar/Sidebar"
import './App.css';
import MainDash from "./components/Maindash/MainDash";
function App() {
  return (
    <div className="App">
    <div className="AppGlass">
<Sidebar/>
<MainDash/>
      </div>  
    </div>
  );
}

export default App;
