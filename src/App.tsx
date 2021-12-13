import React, { useState } from 'react';
import './styles/App.css';
import { AppBar, Typography, TextField, Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Page from './components/Page/Page'
import Modal from './components/Modal/Modal'

const useStyles: Function = makeStyles(() => ({
  appBar: {
    alignItems: 'center'
  },
  title: {
    flexGrow: 1,
    padding: 10
  },
  searchBarContainer: {

  },
  searchBar: {

  },
  submitBtn: {

  }
}));


const App = () => {

  //State
  const [searchParams, setSearchParams] = useState<string>('')
  const [searchResult, setSearchResult] = useState<string>('')
  const [searchResultsOpen, setSearchResultsOpen] = useState<boolean>(false)
  
  //Handlers
  const onSearch: VoidFunction = () => {
    
    //do logic for search through json for best joke
    // set modal state to open and pass in joke string 
    
    setSearchResult("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    setSearchResultsOpen(true)
  }

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.currentTarget.value);
  }

  const onModalClosed = () => setSearchResultsOpen(false)


  const classes = useStyles()
  return (
    <>
      <AppBar position='static' className={classes.appBar}>
          <Typography variant='h3' className={classes.title}>
            The #1 Dad Joke Generator
          </Typography>
        </AppBar>
        <Page title='Enter your search term'>      
          <Grid className={classes.searchBarContainer}>
            <TextField
              className={classes.searchBar}
              variant='outlined'
              onChange={onTextChanged}
            />
          </Grid>
          <Grid>
            <Button 
              color='primary'
              variant='contained'
              onClick={onSearch}>
                Search
              </Button>
          </Grid>
          <Modal
            isOpen={searchResultsOpen}
            title='Search Results'
            content={searchResult}
            onClose={onModalClosed} 
          />
        </Page>
      </>
  );
}

export default App;
