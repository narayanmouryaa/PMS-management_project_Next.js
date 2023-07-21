import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Switch from "@mui/material/Switch";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SquareIcon from "@mui/icons-material/Square";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import Avatar from "../components/Avatar";
import axios from 'axios'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 8,
};

const top10Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            // display: 'inline-block'
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const CommonModal = ({ open, handleClose }) => {
  const [viewData, setViewData] = useState(1);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //    const [openModal1,handleClose1] = useState(false);

  const [formData, setFormData] = useState({
    SpaceName: "",
    UserName: "",
    ActiveStatus: "",
    ComapleteStatus: "",
    closedStatus: "",
  });
  const [spaceName, setSpaceName] = useState("");
  const [userName, setUserName] = useState([]);
  const [activeStatus, setActiveStatus] = useState("");
  const [comapleteStatus, setComapleteStatus] = useState("");
  const [closedStatus, setClosedStatus] = useState("");
  // console.log(spaceName, "dsjndjksnd");
  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.userName,
      (option) => option.value
    );
    setUserName(selectedValues);
  };

  const [fileData, setFileData] = useState(null);

  // setFormData({
  //   SpaceName: "",
  //   SpaceColoCode: "",
  //   UserName: "",
  // // });
  // setFileData(null);

  console.log(formData, "............");
  console.log(fileData, "FileData............");

  // get Color Get
  const [color, setColor] = useState({
    SpaceColor: "",
    ActiveStatusColor: "",
    ComapleteStatusColor: "",
    ClosedStatusColor: "",
  });

  // const [colorCode, setColorCode] = useState("");
  const [SpaceColorCode, setSpaceColorCode] = useState("");
  const [ActiveStatusColorCode, setActiveStatusColorCode] = useState("");
  const [ComapleteStatusColorCode, setComapleteStatusColorCode] = useState("");
  const [ClosedStatusColorCode, setClosedStatusColorCode] = useState("");

  const handleInputChangeColor = (event) => {
    const colorValue = event.target.value;
    setColor(colorValue);
    setSpaceColorCode(colorValue.toUpperCase());
    setActiveStatusColorCode(colorValue.toUpperCase());
    setComapleteStatusColorCode(colorValue.toUpperCase());
    setClosedStatusColorCode(colorValue.toUpperCase());
  };

  // First Element get

  const data = [
    spaceName,
    SpaceColorCode,
    ActiveStatusColorCode,
    ComapleteStatusColorCode,
    ClosedStatusColorCode,
    activeStatus,
    comapleteStatus,
    closedStatus,
  ];
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("Userlogintoken")
    const config = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const apiData = await axios.post(
      "https://pmsapi.qrstaff.in/api/space/",
      data,
      config
    );
    // console.log(apiData, "submitdata");
  };
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSpaceName(newValue);
    if (newValue.length > 0) {
      const firstElement = newValue[0];
      console.log(firstElement);
      setInputValue(firstElement);
      // or do something else with the value
    }
  };

  // console.log(inputValue, "inputValue.........");

  // file data store
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the file content as text (or any other desired format)
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        // Store the file data in localStorage
        localStorage.setItem('fileData', fileData);
      };
      reader.readAsText(file);
    }
  };
  // console.log(fileData,"datafile............")
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={3} sm={4}></Grid>
        <Grid item xs={12} lg={6}></Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ zIndex: "3000" }}
        >
          <Box sx={style}>
            {viewData === 1 && (
              <Box sx={style}>
                <BootstrapDialogTitle
                  sx={{ fontSize: 40, fontWeight: 600 }}
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  Create New Space
                </BootstrapDialogTitle>
                <Typography sx={{ fontSize: 14 }} component="div">
                  Clarity gives you the blocks and components you need to create{" "}
                  <br /> a truly professional website.
                </Typography>

                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <Box mt={4}>
                      <FormControl variant="standard">
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          style={{ fontWeight: "600", fontSize: "18px" }}
                        >
                          Space Name
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Enter Space Name"
                          type="text"
                          value={spaceName}
                          onChange={handleInputChange}
                          style={{ width: "400px" }}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>

                    <Box mt={3}>
                      <FormControl variant="standard">
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          style={{ fontWeight: "600", fontSize: "18px" }}
                        >
                          Space Color
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Enter Space Color Code"
                          type="color"
                          style={{ width: "400px" }}
                          name="SpaceColorCode"
                          value={SpaceColorCode}
                          onChange={(e) => setSpaceColorCode(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box mt={3}>
                      <FormControl variant="standard">
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          style={{ fontWeight: "600", fontSize: "18px" }}
                        >
                          Space Icon
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Upload Space icon"
                          type="file"
                          onChange={handleFileChange}
                          style={{ width: "400px", paddingBottom: "10px" }}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box mt={3}>
                      <FormControl variant="standard" sx={{ minWidth: 200 }}>
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          style={{ fontWeight: "600", fontSize: "18px" }}
                        >
                          Select User
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Select User Name"
                          type="text"
                          style={{ width: "550px", marginTop: "50px" }}
                          startAdornment={
                            <InputAdornment position="start">
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top10Films}
                                sx={{ width: 200, height: 80 }}
                                renderInput={(params) => (
                                  <TextField {...params} label="Movie" />
                                )}
                              />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <Avatar
                      name={inputValue}
                      SpaceColoCode={SpaceColorCode}
                      height={"90px"}
                      width={"90px"}
                    />
                  </Box>
                </Box>

                {viewData === 4 ? (
                  <Button>Create</Button>
                ) : (
                  <Button
                    variant="contained"
                    style={{ marginTop: "50px", width: "650px" }}
                    onClick={() => setViewData(viewData + 1)}
                  >
                    Next
                  </Button>
                )}
              </Box>
            )}
            {viewData === 2 && (
              <Box sx={style}>
                <Box>
                  <Typography sx={{ fontSize: 35, fontWeight: 600 }}>
                    <Button onClick={() => setViewData(viewData - 1)}>
                      {" "}
                      <ArrowBackIosIcon style={{ color: "black" }} />
                    </Button>
                    What task Statuses do you want ?
                  </Typography>

                  <Typography
                    sx={{ marginTop: "20px", fontSize: "20px" }}
                    gutterBottom
                  >
                    Active Status
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={7} style={{ label: "text" }}>
                      <label style={{ marginBottom: "5px" }}>Status Name</label>
                      <TextField
                        fullWidth
                        name="ActiveStatus"
                        value={activeStatus}
                        onChange={(e) => setActiveStatus(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <label style={{ marginBottom: "5px" }}>
                        Status Color
                      </label>
                      <TextField
                        fullWidth
                        type="color"
                        name="ActiveStatusColor"
                        value={ActiveStatusColorCode}
                        onChange={(e) =>
                          setActiveStatusColorCode(e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={1} style={{ fontSize: "50px" }}>
                      <AddIcon />
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{ marginTop: "20px", fontSize: "20px" }}
                    gutterBottom
                  >
                    Complete Status
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={7} style={{ label: "text" }}>
                      <label style={{ marginBottom: "5px" }}>Status Name</label>
                      <TextField
                        fullWidth
                        style={{ height: "20px" }}
                        name="ComapleteStatus"
                        value={comapleteStatus}
                        onChange={(e) => setComapleteStatus(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <label style={{ marginBottom: "5px" }}>
                        Status Color
                      </label>
                      <TextField
                        fullWidth
                        type="color"
                        name="ComapleteStatusColor"
                        value={ComapleteStatusColorCode}
                        onChange={(e) =>
                          setComapleteStatusColorCode(e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={1} style={{ fontSize: "50px" }}>
                      <AddIcon />
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{ marginTop: "20px", fontSize: "20px" }}
                    gutterBottom
                  >
                    Closed Status
                  </Typography>

                  <Grid container spacing={2} sx={{ marginBottom: "40px" }}>
                    <Grid item xs={7} style={{ label: "text" }}>
                      <label style={{ marginBottom: "5px" }}>Status Name</label>
                      <TextField
                        fullWidth
                        name="closedStatus"
                        value={closedStatus}
                        onChange={(e) => setClosedStatus(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <label style={{ marginBottom: "5px" }}>
                        Status Color
                      </label>
                      <TextField
                        fullWidth
                        type="color"
                        name="ClosedStatusColor"
                        value={ClosedStatusColorCode}
                        onChange={(e) =>
                          setClosedStatusColorCode(e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={1} style={{ fontSize: "50px" }}>
                      <AddIcon />
                    </Grid>
                  </Grid>

                  {viewData === 4 ? (
                    <Button>Create</Button>
                  ) : (
                    <Button
                      variant="contained"
                      style={{ width: "650px" }}
                      onClick={() => setViewData(viewData + 1)}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            )}
            {viewData === 3 && (
              <Box sx={style}>
                <Box>
                  <Typography
                    sx={{ display: "flex", fontSize: 35, fontWeight: 600 }}
                  >
                    <Button onClick={() => setViewData(viewData - 1)}>
                      <ArrowBackIosIcon style={{ color: "black" }} />
                    </Button>
                    Default Settings for Views
                  </Typography>

                  <Grid
                    container
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "60px",
                    }}
                  >
                    <Grid item xs={8}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          border: "2px solid black",
                          height: "60px",
                        }}
                      >
                        <Typography style={{ paddingRight: "150px" }}>
                          <FormatListBulletedIcon />
                          List View
                        </Typography>

                        <Switch
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "25px",
                      marginBottom: "60px",
                    }}
                  >
                    <Grid item xs={8}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          border: "2px solid black",
                          height: "60px",
                        }}
                      >
                        <Typography style={{ paddingRight: "150px" }}>
                          <ViewQuiltIcon />
                          Grid View
                        </Typography>

                        <Switch
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  {viewData === 4 ? (
                    <Button>Create</Button>
                  ) : (
                    <Button
                      variant="contained"
                      style={{ width: "650px" }}
                      onClick={() => setViewData(viewData + 1)}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            )}
            {viewData === 4 && (
              <Box sx={style}>
                <Box>
                  <Typography
                    sx={{ fontSize: 35, fontWeight: 600, marginLeft: "30px" }}
                  >
                    <Button onClick={() => setViewData(viewData - 1)}>
                      <ArrowBackIosIcon style={{ color: "black" }} />
                    </Button>
                    Default Settings for Views
                  </Typography>

                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "30px",
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
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography style={{ color: "grey" }}>
                          Space Name
                        </Typography>
                        <Typography>{spaceName}</Typography>
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
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography style={{ color: "grey" }}>
                          Avatar
                        </Typography>

                        <Avatar
                          name={inputValue}
                          SpaceColoCode={SpaceColorCode}
                          height={"40px"}
                          width={"40px"}
                        />
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
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography style={{ color: "grey" }}>
                          Shared with
                        </Typography>
                        <Avatar
                          name={inputValue}
                          SpaceColoCode={SpaceColorCode}
                          height={"40px"}
                          width={"40px"}
                        />
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
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography style={{ color: "grey" }}>
                          Task statuses
                        </Typography>

                        <Stack flexDirection="row">
                          <SquareIcon
                            style={{ color: `${ActiveStatusColorCode}` }}
                          />
                          <SquareIcon
                            style={{ color: `${ComapleteStatusColorCode}` }}
                          />
                          <SquareIcon
                            style={{ color: `${ClosedStatusColorCode}` }}
                          />
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Grid item xs={10}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid black",
                          borderTopWidth: 0,
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography style={{ color: "grey" }}>
                          Default setting for views
                        </Typography>
                        <FormatListBulletedIcon />
                      </Box>
                    </Grid>
                  </Grid>

                  {viewData === 4 ? (
                    <Button
                      variant="contained"
                      style={{
                        width: "560px",
                        marginTop: "30px",
                        marginLeft: "54px",
                      }}
                      onClick={handleSubmit}
                    >
                      Create
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      style={{ width: "650px" }}
                      onClick={() => setViewData(viewData + 1)}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </Grid>
      <Grid item lg={3} sm={4}></Grid>
      {/* </Grid > */}
    </>
  );
};

export default CommonModal;
