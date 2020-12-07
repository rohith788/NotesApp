import React, { useState, useEffect, useRef } from "react";
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
  const [expanded, setExpanded] = useState(false); //expansion state of the card
  const ref = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    document.addEventListener("click", expandedCard, true);
    return () => {
      document.removeEventListener("click", expandedCard, true);
    };
  });

  const expandedCard = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setExpanded(!expanded);
    }
  }; //compress Input card

  const expandCard = () => {
    setExpanded(true);
  }; // Express input card on click

  const saveNote = () => {
    db.collection("notes")
      .add({
        title: title,
        note: note,
      })
      .then(expandedCard)
      .then(setNote(""))
      .then(setTitle(""));
  }; //save the card data to firestore

  return (
    <Card className={classes.root}>
      <CardActions disableSpacing>
        <div
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={expandCard}
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
      <div className="note_text" ref={ref}>
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
          <Button onClick={saveNote}>Add</Button>
        </Collapse>
      </div>
    </Card>
  );
}
