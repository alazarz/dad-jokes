import React, { FC, ReactNode } from 'react'
import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles : Function = makeStyles(() => ({
  title: {
    padding: 10,
  },
}));

export interface IPageProps {
    title: string;
    children: ReactNode;
}

const Page: FC<IPageProps> = ({ title, children }) => {
  const classes =  useStyles();
  return (
      <Container maxWidth='sm'>
        <Typography variant='h5' className={classes.title}>
          {title}
        </Typography>
        {children}
      </Container>
  )
}

export default  Page