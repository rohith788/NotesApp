import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      width: '45ch',
      height: '4ch'
    },
  },
}));

export default function NoteTitleCard({title}) {
    const classes = useStyles();
  
    return (
    <div className={classes.root}  >
        <OutlinedInput
          margin='dense'
          className={classes.margin}
          defaultValue={title}
          inputProps={{ 'aria-label': 'naked' }}
      />
    </div> 
    );
  }