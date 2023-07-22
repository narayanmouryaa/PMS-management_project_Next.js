import React, { useState } from 'react';
import { Button, Modal, Typography, Box } from '@mui/material';

const ParentModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Button  color="primary" onClick={handleOpen} style={{width:'300px'}}>
       
      </Button>
      <Modal open={open} onClose={handleClose} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="modal-body" style={{width:'500px',height:'500px',backgroundColor:'cyan',zIndex:'100000'}}>
          <Typography variant="h5" gutterBottom>
            Parent Modal Content
          </Typography>
          <h1>Sourabh singh</h1>


          
        </div>
      </Modal>
    </div>
  );
};


export default ParentModal;