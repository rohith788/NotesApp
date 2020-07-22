import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import NoteInputBar from '../note-input-bar/note-input-bar.component'
import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';



const useStyles = makeStyles({
  note_text: {
    
    },
  root: {
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
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
});

export default function NoteInputCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false); //expansion state of the card

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
                <NoteInputBar />
            </div>
        </CardActions>
        <div className='note_text'>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <NoteInputBar />
            </Collapse>
        </div>
      </Card>
    );
  }
