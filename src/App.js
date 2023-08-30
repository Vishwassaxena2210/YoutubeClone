import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import {Feed, VedioDetail, ChannelDetail, SearchFeed} from './components';
const App = () => (

  <BrowserRouter>
    <Box sx={{background:'#000'}}>
    <Navbar/>
<Routes>
    <Route path="/" exact element= {<Feed />}/>
    <Route path="/vedio/:id" element={<VedioDetail />}/>
    <Route path="/channel/:id" element={<ChannelDetail />}/>
    <Route path="/search/:searchTerm" element={<SearchFeed />}/>
</Routes>
    </Box>
  </BrowserRouter>
)

export default App

