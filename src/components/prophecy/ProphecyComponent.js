import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Card, CardHeader } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));


export const ProphecyComponent = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Add New Book"/>
      <form className={classes.root} noValidate={false} autoComplete="off">
        <TextField
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={props.name}
          onChange={props.handleChange}
        />
        <br />
        <TextField
          name="author"
          id="outlined-basic"
          label="Author"
          variant="outlined"
          value={props.author}
          onChange={props.handleChange}
        />
        <br />
        <TextField
          name="id"
          id="outlined-basic"
          label="ID"
          variant="outlined"
          value={props.id}
          onChange={props.handleChange}
        />
        <br />
        <input
          name="image"
          type="file"
          ref={props.image}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.submitData()}
        >
          Add
        </Button>
      </form>
    </Card>
  );
};
