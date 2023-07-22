import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid currentColor',
            content: '""',
        },
    },
}));


const GridviewCard = () => {
    return (

        <Card sx={{borderRadius:2,mt:2}}  >
            <CardContent>
                <Typography sx={{ fontSize: 14, textAlign: 'start',textWrap:'wrap' }} gutterBottom>
                    As a translator,I want integrate Crowdin webhook to notify
                </Typography>



                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Chip style={{ backgroundColor: 'yellow', fontSize: '12px', fontWeight: '600', marginBottom: '5px' }} label="Refactoring" />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Stack direction="row" spacing={1}>
                            <BookmarkIcon color='primary' />
                            <KeyboardDoubleArrowUpIcon style={{ color: 'brown' }} />
                            <Avatar style={{ width: 24, height: 24, fontSize: '13px', color: 'black', fontWeight: '600' }}>2</Avatar>
                        </Stack>

                    </div>
                    <div>

                        <Stack direction="row" spacing={1}>
                            <Chip sx={{ color: "grey", backgroundColor: 'white' }} label="FC-7" />
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar sx={{ width: 24, height: 24, fontSize: '10px', backgroundColor: 'blue' }}>PG</Avatar>
                            </StyledBadge>

                        </Stack>
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
}

export default GridviewCard;