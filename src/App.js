import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import City from './Pages/City';
import Home from './Pages/Home';
import Country from './Pages/Country';
import Filter from './Pages/Filter';
import YearsPage from './Pages/YearsPage';
import Region from './Pages/Region';
import Topic from './Pages/Topic';
import TopicFilterpg from './Pages/TopicFilterpg';
import PestleFilter from './Pages/PestleFilter';
import Endpage from './Pages/Endpage';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/city" element={<City />} />
                    <Route path="/country" element={<Country />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/year" element={<YearsPage />} />
                    <Route path="/region" element={<Region />} />
                    <Route path="/topic" element={<Topic />} />
                    <Route path="/topicfilter" element={<TopicFilterpg />} />
                    <Route path="/pestle" element={<PestleFilter />} />
                    <Route path="/end" element={<Endpage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
