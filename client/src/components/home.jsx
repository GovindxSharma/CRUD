import React from 'react';
import crudImage from '../images/Cruddd.png';
import {styled} from '@mui/material'

const Picture=styled('img')`
height:90vh;
width:100%`

const Home = () => {
  return <Picture src={crudImage} alt="crud.png"  />;
};

export default Home;
