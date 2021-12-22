import React, { useState } from 'react';
import './styles/App.css';
import { AppBar, Typography, TextField, Grid, Button, Snackbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Page from './components/Page/Page'
import Modal from './components/Modal/Modal'
import { IJoke } from './interfaces' 
import { search } from './helpers'

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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchResultsOpen, setSearchResultsOpen] = useState<boolean>(false)

  //Handlers
  const onSearch: VoidFunction = () => {
    let joke: IJoke = search(searchParams);
    setSearchResult(joke.body);
    setSearchResultsOpen(true);
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
          content={searchResult}
          onClose={onModalClosed} 
        />
      </Page>
    </>
  );
}

export default App;
