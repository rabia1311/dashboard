import React from 'react';
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import City from "../src/Pages/City"
import Home from './Pages/Home';
import Country from "../src/Pages/Country"
import Filter from './Pages/Filter';
import YearsPage from '../src/Pages/YearsPage';
import Region from './Pages/Region';
import Topic from "../src/Pages/Topic"
function App() {
  
    return (
      <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/city' element={<City/>}/>
            <Route path='/country' element={<Country/>}/>
            <Route path='/filter' element={<Filter/>}/>
            <Route path='/year' element={<YearsPage/>}/>
            <Route path='/region' element={<Region/>}/>
            <Route path='/topic' element={<Topic/>}/>
            
            </Routes>
            </BrowserRouter>
      </div>
    );
}

export default App;
