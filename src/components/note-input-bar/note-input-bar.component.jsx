import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export default function NoteInputBar() {
    const classes = useStyles();
  
    return (
    <div className={classes.root}>
        <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
        />
    </div>
    );
  }