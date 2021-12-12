import React from 'react';
import './styles/App.css';
import { AppBar, Typography, TextField, Grid, Button } from '@mui/material'
import Page from './components/Page/Page'

const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
  let searchParams = e.currentTarget.value;
  console.log(searchParams)
  //do logic for search through json for best joke
  // set modal state to open and pass in joke string  
}

const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  let text = e.currentTarget.value;
  console.log(text)

}


const App = () => { 
  return (
      <>
      <Page title="Dad Jokes">
      <AppBar position='static'>
          <Typography variant='h4'>
            Hello Dad Jokes World
          </Typography>
        </AppBar>
        <Grid>
          <TextField
            variant='outlined'
            onChange={onTextChanged}

          />

        </Grid>
      </Page>
      </>
  );
}

export default App;
