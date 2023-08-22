import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../Cards/update.css"
import axios from "axios"

const Update = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:5000/dashboard/get')
      .then(response => {
        setUpdates(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array makes this effect run once after initial render

  return (
    <Card className="cardcontainer" sx={{ minWidth: 275, backgroundColor: 'lightcyan' }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          INSIGHTS
        </Typography>
        {/* Map over the updates and render insights */}
        {updates.map((update, index) => (
          <div key={index}>
            
            <Typography variant="body1">
               {update.insight}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Update;
