import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      // margin: theme.spacing(1),
      width: '45ch',
      height: '4ch'
    },
  },
}));

export default function NoteInputBar(pros) {
    const classes = useStyles();
  
    return (
    <div className={classes.root}  >
        <OutlinedInput
          margin='dense'
          className={classes.margin}
          defaultValue="Title"
          inputProps={{ 'aria-label': 'naked' }}
      />
    </div> 
    );
  }