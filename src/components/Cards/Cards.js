import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow'; // Import the icon
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
const Cards = () => {
  const cardStyles = {
    backgroundColor: 'lightpink',
    maxWidth: 400,
    margin: '0 10px', // Add some margin for spacing
  };

  return (
    <div style={{ display: 'flex' }}>
      <Card sx={cardStyles}>
        <CardHeader
          avatar={
            <IconButton aria-label="intensity">
             <StackedLineChartIcon/>
            </IconButton>
          }
          title="Intensity"
        />
        <CardContent>
          <Typography variant="body2" color="white">
            Intensity refers to the degree or strength of a quality, force, or phenomenon, often indicating the magnitude of its impact or effect.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyles}>
        <CardHeader
          avatar={
            <IconButton aria-label="intensity">
              <StackedLineChartIcon/>
            </IconButton>
          }
          title="Likelihood
          "
        />
        <CardContent>
          <Typography variant="body2" color="white">
          Likelihood refers to the probability or chance of an event or circumstance occurring.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={cardStyles}>
        <CardHeader
          avatar={
            <IconButton aria-label="intensity">
                              <StackedLineChartIcon/>

            </IconButton>
          }
          title="Relevance"
        />
        <CardContent>
          <Typography variant="body2" color="white">
          Relevance refers to the meaningful connection or significance of something in relation to a specific context or topic.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
