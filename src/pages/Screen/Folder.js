import * as React from "react";
// import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Container from '@mui/material/Container';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import SquareIcon from "@mui/icons-material/Square";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import ParentModal from "./ParentModal";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { size, weight } from "../assets/theme/theme";
// import Typography from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//         padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//         padding: theme.spacing(1),
//     },
// }));

// function BootstrapDialogTitle(props) {
//     const { children, onClose, ...other } = props;

//     return (
//         <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//             {children}
//             {onClose ? (
//                 <IconButton
//                     aria-label="close"
//                     onClick={onClose}
//                     sx={{
//                         position: 'absolute',
//                         right: 8,
//                         top: 8,
//                         color: (theme) => theme.palette.grey[500],
//                     }}
//                 >
//                     <CloseIcon />
//                 </IconButton>
//             ) : null}
//         </DialogTitle>
//     );
// }

// BootstrapDialogTitle.propTypes = {
//     children: PropTypes.node,
//     onClose: PropTypes.func.isRequired,
// };

export default function Folder({ open, setOpen }) {
  const [open1, setOpen1] = React.useState(false);
  // const [open2, setOpen2] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const handleClose = (event, reason) => {
  //     if (reason !== undefined) {
  //         if (reason !== "backdropClick") {
  //             setOpen(false);
  //         }
  //     }
  //     else {
  //         setOpen(false);
  //     }
  // };

  return (
    <>
      <div>
        {/* <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                > */}

        <Modal open={open} onClose={handleClose} style={{ zIndex: "4000" }}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Card sx={style}>
              <CardContent>
                <IconButton
                  sx={{ position: "absolute", top: "8px", right: "8px" }}
                  onClick={handleClose}
                >
                  <Close />
                </IconButton>

                {/* <BootstrapDialogTitle sx={{ fontSize: 40, fontWeight: 600 }} id="customized-dialog-title" onClose={handleClose}> */}
                <Typography sx={{ fontSize: 30 }}>Create Folder</Typography>

                {/* </BootstrapDialogTitle> */}

                <Box mt={4}>
                  <FormControl variant="standard">
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      style={{
                        fontWeight: weight.low,
                        fontSize: size.font2,
                        textAlign: "left",
                      }}
                    >
                      Folder Name
                    </InputLabel>
                    <Input
                      style={{ width: "650px" }}
                      id="input-with-icon-adornment"
                      placeholder="Enter Folder Name"
                      type="text"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                  }}
                >
                  <Grid item xs={10}>
                    <Box
                      onClick={() => {
                        setOpen1(true);
                        setOpen(false);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid black",
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        height: "60px",
                        padding: "15px",
                      }}
                    >
                      <Avatar sx={{ bgcolor: red[800] }} variant="rounded">
                        A
                      </Avatar>
                    </Box>
                  </Grid>
                </Grid>

                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={10}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid black",
                        borderBottomWidth: 1,
                        borderTopWidth: 0,
                        height: "60px",
                        padding: "15px",
                      }}
                    >
                      <Typography style={{ color: "grey"  }}>
                        Shared with
                      </Typography>
                      <Avatar sx={{ bgcolor: red[800] }}>A</Avatar>
                    </Box>
                  </Grid>
                </Grid>

                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "50px",
                  }}
                >
                  <Grid item xs={10}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid black",
                        borderBottomWidth: 1,
                        borderTopWidth: 0,
                        height: "60px",
                        padding: "15px",
                      }}
                    >
                      <Typography style={{ color: "grey" }}>
                        Task statuses
                      </Typography>

                      <Stack flexDirection="row">
                        <SquareIcon style={{ color: "black" }} />
                        <SquareIcon style={{ color: "green" }} />
                        <SquareIcon style={{ color: "blue" }} />
                        <SquareIcon style={{ color: "pink" }} />
                        <SquareIcon style={{ color: "red" }} />
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              <Button
                variant="contained"
                style={{ width: "680px", textAlign: "center" }}
              >
                Create Folder
              </Button>
            </Card>
          </Box>
        </Modal>
        {/* </BootstrapDialog> */}
      </div>

      <ParentModal
        open={open1}
        setOpen={(val) => {
          setOpen1(val);
          setOpen(true);
        }}
      />
    </>
  );
}
