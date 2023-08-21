import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'; // Import the Modal component
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
import chart from "../../images/chart.png"
import "../Cards/cards.css"
import "../Cards/Modal.css"
import Barchat from '../Charts/Barchat';

const CardModal = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div>
      <Card sx={{ backgroundColor: 'lightpink', maxWidth: 400, margin: '0 10px' }} onClick={handleOpen}>
        <CardHeader
          avatar={
            <IconButton aria-label="intensity" >
              <img className='img' src={chart} alt='chart'></img>
            </IconButton>
          }
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="white">
            {content}
          </Typography>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose} aria-labelledby={`${title}-modal-title`}>
        <div style={modalStyles} className="modal-content">
          <IconButton aria-label="close" className="close-button" onClick={handleClose} style={{ position: 'absolute', top: 0, right: 0 }}>
            <CloseIcon />
          </IconButton>
          <h2 id={`${title}-modal-title`}>{title}</h2>
          <p>{content}</p>
          <Barchat className="bar"/>
        </div>
      </Modal>
    </div>
  );
}

const Cards = () => {
  return (
    <div className="ccontainer">
      <CardModal 
       title="Intensity"
        content="Intensity refers to the degree or strength of a quality, force, or phenomenon, often indicating the magnitude of its impact or effect."
      />
      <CardModal
        title="Likelihood"
        content="Likelihood refers to the probability or chance of an event or circumstance occurring."
        
      />
      <CardModal
        title="Relevance"
        content="Relevance refers to the meaningful connection or significance of something in relation to a specific context or topic."
      />
    </div>
  );
}

export default Cards;
