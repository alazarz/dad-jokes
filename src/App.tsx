import React from 'react';
import './App.css';
import { AppBar, Typography } from '@mui/material'

const App = () => { 
  return (
      <>
        <AppBar position='static'>
          <Typography variant='h4'>
            Hello Dad Jokes World
          </Typography>
        </AppBar>

      </>
  );
}

export default App;
