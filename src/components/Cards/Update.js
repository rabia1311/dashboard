import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../Cards/update.css"

const  Update=()=> {
  return (
    <Card className="cardcontainer" sx={{ minWidth: 275  , backgroundColor: 'lightcyan'}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Updates
        </Typography>
        <Typography variant="h6" component="div">
          Name: John
        </Typography>
        <Typography variant="body1">
          Insights: U.S. petroleum consumption is projected to remain below the 2005 level.
        </Typography>
      </CardContent>
      <CardContent>
       
        <Typography variant="h6" component="div">
          Name: Alena
        </Typography>
        <Typography variant="body1">
        Mars, Unilever, Cargill and Mondelēz are already using GFW Commodities to assess deforestation risks in their palm oil, soy and cocoa supply chains across a collective area of land the size of Mexico
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Update;