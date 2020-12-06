import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { db } from "../../firebase/firebase.utils";

const useStyles = makeStyles({
  root: {
    "& .MuiTextField-root": {
      width: "45ch",
    },
    "& .MuiInputBase-root": {
      width: "45ch",
    },
    minWidth: 275,
    paddingBottom: 1,
    boxShadow: "none",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 2,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
});

export default function NoteInputCard() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false); //expansion state of the card

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const saveNote = () => {
    db.collection("notes")
      .add({
        title: title,
        note: note,
      })
      .then(handleExpandClick)
      .then(setNote(""))
      .then(setTitle(""));
  };
  return (
    <Card className={classes.root}>
      <CardActions disableSpacing>
        <div
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <TextField
            id="Title"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </CardActions>
      <div className="note_text">
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <center>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              label="input note here"
              variant="outlined"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </center>
          <right>
            <Button onClick={saveNote}>Add</Button>
          </right>
        </Collapse>
      </div>
    </Card>
  );
}
