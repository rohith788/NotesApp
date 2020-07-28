import TextField from '@material-ui/core/TextField';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      '& .MuiTextField-root': {
        width: '45ch',
      },
    },
  });
  

export default function NoteTextArea() {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Input Note here"
                variant="outlined"
            />
        </div>
    )
}

