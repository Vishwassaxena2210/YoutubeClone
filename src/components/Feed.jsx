import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material'
import Sidebar from './Sidebar';
const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
        <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
            <Sidebar></Sidebar>

            <Typography classname="copyright" variant="body2" sx={{mt:1.5,color:"#fff"}}>
              Copyright 2022 jsm medio
            </Typography>
        </Box>
        <box p={2} sx={{overflowY:'auto',height:'90vsh',flex:5}}>
          <Typography variant="h4"
          fontWeight="bold" mb={2} sx={{color:'white'}}>
             New <span style={{color:'#FC1503'}}>vedios</span>
          </Typography>
        </box>
    </Stack>
  )
}

export default Feed