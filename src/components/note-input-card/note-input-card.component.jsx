import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import NoteTitleCard from '../note-title-bar/note-title-bar.component'
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import NoteTextArea from '../note-text-area/note-text-area.component'
import Button from '@material-ui/core/Button';

import {db} from '../../firebase/firebase.utils'

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      width: '45ch',
    },
    minWidth: 275,
    paddingBottom: 1,
    boxShadow: "none"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 2, 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
});

export default function NoteInputCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false); //expansion state of the card

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const saveNote = () => {
      db.collection("notes").doc("note").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    }
    return (
      <Card className={classes.root} >
        <CardActions disableSpacing>
            <div className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
                <NoteTitleCard title='Title Here' />
            </div>
        </CardActions>
        <div className='note_text'>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <center> 
                  <NoteTextArea />
                </center>
                <right>
                  <Button onClick={saveNote}>Default</Button>
                </right>
            </Collapse>
        </div>
      </Card>
    );
  }
