import React, { useState, useEffect } from 'react';
import "../FilterTable/Filter.css"
const Pestle= () => {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/get");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div  className='container'>
      <h1>Filter BY PESTLE</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchFilter}
        onChange={e => setSearchFilter(e.target.value)}
      />
      {filteredData.map(item => (
        <div key={item._id}>
          <p>{item.pestle}</p>
         
        </div>
      ))}
    </div>
  );
};

export default Pestle;
