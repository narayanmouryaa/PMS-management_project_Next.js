import React, { useState } from 'react';
import { Button, Modal, Typography, Box, Card, CardContent } from '@mui/material';
import { Container } from 'react-bootstrap';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  height:500,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ParentModal = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      // style={{ zIndex: "3000" }}
      >
        <Box sx={style}>
        HELLO
        </Box>
      </Modal>

    </div>
  );
};


export default ParentModal;