import React from 'react';
import NavbarFixed from '../components/Navbar';
import FixedSidenav from '../components/Fixedsidenav'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GridviewCard from './Gridviewcard';
// import Divider from '@mui/material/Divider';
import Form from 'react-bootstrap/Form';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import SearchIcon from '@mui/icons-material/Search';
import MiniDrawer from '../components/Minidrawer';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Gridview = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ display: 'flex', position: 'fixed'}}>

        <NavbarFixed />
        <FixedSidenav />
        <MiniDrawer />

        <Box width={1150} height={750} sx={{ml: 5, display: 'flex' }}>

          
          <Box width={330} height={650} sx={{ mt: 8, ml: 5}}>
            <Box width={330} height={60} sx={{ backgroundColor:'lightcoral',borderRadius:2,mb: 2, p: 2, fontWeight: '500', fontSize: '20px' }}> TO DO </Box>


            <Box className="scrollbar" width={330} height={550} sx={{ overflowY: 'auto' }}>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

            </Box>

          </Box>



          <Box width={330} height={650} sx={{ mt: 8, ml: 5 }}>
            <Box width={330} height={60} sx={{ backgroundColor:'lightcoral',borderRadius:2,mb: 2, p: 2, fontWeight: '500', fontSize: '20px' }}> IN PROGRESS </Box>


            <Box className="scrollbar" width={330} height={550} sx={{ overflowY: 'auto' }}>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

            </Box>

          </Box>





          <Box width={330} height={650} sx={{ mt: 8, ml: 5 }}>
            <Box width={330} height={60} sx={{ backgroundColor:'lightcoral',borderRadius:2,mb: 2, p: 2, fontWeight: '500', fontSize: '20px' }}> COMPLETE </Box>


            <Box className="scrollbar" width={330} height={550} sx={{ overflowY: 'auto' }}>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

              <Box width={310} height={180} sx={{ backgroundColor: 'green', borderRadius: 2, ml: 1, mt: 2 }}>
                <GridviewCard />
              </Box>

            </Box>

          </Box>


        </Box>


        

      </Box>

      {/* <Box style={{ padding: '5px' }}>
        <Grid container spacing={1}>
          <Grid item xs={3} >
            <MiniDrawer />
          </Grid>
          
          <Grid item xs={3}>
            <Box sx={{ display: 'block', mt: 7, p: 1 }}>
              <Box sx={{ display: 'flex', mb: 1, height: 30 }}>

                <Form.Control
                  // style={{ padding: '5px', height: '30px', width: '180px', marginBottom: '10px' }}

                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <AvatarGroup max={5} sx={{ display: 'flex' }} >
                  <Avatar alt="Remy Sharp" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                  <Avatar alt="Travis Howard" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                  <Avatar alt="Cindy Baker" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                  <Avatar alt="Agnes Walker" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                  <Avatar alt="Trevor Henderson" sx={{ width: '30px', height: '30px' }} src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
              </Box>


            </Box>

            <Item sx={{ backgroundColor: 'lightGray', height: '100vh', width: '350px' }}>
              <Typography style={{ display: 'flex', justifyContent: 'start', fontWeight: '600', padding: '8px' }} >TO DO</Typography>
              <GridviewCard sx={{ minWidth: 275 }} />
              <GridviewCard sx={{ minWidth: 275 }} />
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ display: 'block', mt: 8, p: 1, overflowX: 'auto' }}>
              <Box sx={{ display: 'flex' }}>
                <Typography style={{ color: 'grey' }}>
                  only My issues
                </Typography>
                <Typography style={{ color: 'grey', marginLeft: '15px' }}>
                  Recently Updated
                </Typography>
              </Box>
            </Box>
            <Item sx={{ backgroundColor: 'lightGray', height: '100vh', width: '350px' }}>
              <Typography style={{ display: 'flex', justifyContent: 'start', fontWeight: '600', padding: '8px' }} >IN PROGRESS</Typography>
              <GridviewCard />
            </Item>
          </Grid>


          <Grid item xs={3}>
            <Box sx={{ display: 'block', mt: 8, p: 1 }}>
              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{ height: '30px', borderColor: 'light' }}
                >
                  <MenuItem value="">
                    <em>All sprints</em>
                  </MenuItem>
                  <MenuItem value={10}>something </MenuItem>
                  <MenuItem value={20}>anything </MenuItem>
                  <MenuItem value={30}>few more</MenuItem>
                </Select>

              </FormControl>
            </Box>

            <Item
              sx={{ backgroundColor: 'lightGray', height: '100vh', width: '350px' }}>
              <Typography style={{ display: 'flex', justifyContent: 'start', fontWeight: '600', padding: '8px' }} >DONE</Typography>
              <Card sx={{ borderRadius: 2, mt: 2 }}  >
                <CardContent>
                  <Typography sx={{ fontSize: 16, textAlign: 'start' }} gutterBottom>
                    As a translator,I want integrate Crowdin webhook to notify translators about changed strings
                  </Typography>
                </CardContent>
              </Card>

              <GridviewCard />

              <Card sx={{ borderRadius: 2, mt: 2 }}  >
                <CardContent>
                  <Typography sx={{ fontSize: 16, textAlign: 'start' }} gutterBottom>
                    As a translator,I want integrate Crowdin webhook to notify.
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
         
       </Grid>
      </Box >   */}


    </>
  );
};

export default Gridview;