import React,{useState} from 'react'
import Navbar from "../components/Navbar"
import FixedSidenav from '../components/Fixedsidenav'
import MiniDrawer from '../components/Minidrawer'
import Link from "next/link";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SquareIcon from '@mui/icons-material/Square';
import TaskModal from '../Screen/Taskmodal';
import SubtaskList from '../features/Listviewtask';
import UserModal from '../Screen/Usermodal';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));




function  Listview (){

  const [openModal, setOpenModal] = React.useState(false);
  const [open, setOpen] = useState(false);


  return (
    <>
      <Navbar/>
      {/* <Divider component='li' style={{ paddingTop: '35px' }} /> */}
      {/* <Divider component='li' style={{ paddingTop: '45px' }} /> */}
      <FixedSidenav />
      <Box sx={{ flexGrow: 1 }} style={{ padding: '5px' }}>
        <Grid container spacing={2}>
          <Grid item xs={3} >

            <MiniDrawer />
          </Grid>
          <Grid item xs={9}>
            <Box style={{ height: '100vh', width: '71vw',marginTop:'65px'  }}>

              <Typography >
                <span style={{ fontWeight: '600' }}
                >Hey mariana -</span>  heres a look of your store
              </Typography>

              <Typography style={{ marginTop: '30px' }} >  <FormatListBulletedIcon /> List 1</Typography>

              <Box style={{ display: 'flex', alignItems: "center" }}>
                <SquareIcon style={{ color: '' }}/>

                
                  
                  <Link href="#"onClick={()=>setOpen(true)} >
                    <Button >
                      <PersonAddIcon  style={{ marginLeft: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />
                    </Button>
                    
                  </Link>


                  <Link href="#" onClick={() => setOpenModal(true)}>
                    <Button style={{ color: 'black', display: 'inline'}} >
                      Task one
                    </Button>
                  </Link>

              </Box>
              <SubtaskList />
            </Box>

          </Grid>

        </Grid>


      </Box >
      <TaskModal open={openModal} setOpen={setOpenModal} />
      <UserModal open={open} setOpen={setOpen} />


    </>
  );
};

export default Listview;
