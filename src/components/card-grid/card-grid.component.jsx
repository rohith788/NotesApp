import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import NoteCard from "../card/card.component";
import NoteInputCard from "../note-input-card/note-input-card.component";
import { db } from "../../firebase/firebase.utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CardGrid() {
  const [title, setTitle] = useState([]);
  const [note, setNote] = useState({});

  useEffect(() => {
    let noteObj = {};
    let titles = [];
    const unsubscribe = db.collection("notes").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        titles.push(doc.data().title);
        noteObj[doc.data().title] = doc.data().note;
      });
      setNote(noteObj);
      setTitle(titles);
    });
    return () => {
      unsubscribe();
    };
  }, [db]);

  const classes = useStyles();

  const FormRow = () => {
    console.log(title.length);
    if (title.length > 0) {
      title.map((t) => {
        return (
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <NoteCard title={title} noteText={note[title]} />
            </Paper>
          </Grid>
        );
      });
    } else {
      return <div></div>;
    }
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <NoteInputCard />
      </Grid>
      <Grid container spacing={1}>
        {title.map((t) => {
          console.log(t);
          return (
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <NoteCard title={t} noteText={note[t]} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
