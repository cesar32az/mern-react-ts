import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  TextField,
  makeStyles,
  Button,
  CardActions,
} from "@material-ui/core";
import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { createvideo } from "../../services/VideoService";
import { Video } from "./video";
type InputChange = ChangeEvent<HTMLInputElement>;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
  card: {
    marginTop: "3rem",
  },
}));

export const VideoForm = () => {
  const history = useHistory();
  const classes = useStyles();
  const initialState = { title: "", description: "", url: "" };
  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createvideo(video);
    toast.success("New Video added");
    history.push("/");
    setVideo(initialState)
  };

  return (
    <Fragment>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} md={4}>
          <Card variant="outlined" className={classes.card}>
            <form className={classes.root} onSubmit={handleSubmit}>
              <CardHeader title="New Video" />
              <CardContent>
                <Grid container justify="center">
                  <TextField
                    name="title"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    autoFocus
                    onChange={handleInputChange}
                    value={video.title}
                  />
                </Grid>
                <Grid container justify="center">
                  <TextField
                    name="url"
                    label="URL"
                    fullWidth
                    variant="outlined"
                    onChange={handleInputChange}
                    value={video.url}
                  />
                </Grid>
                <Grid container justify="center">
                  <TextField
                    name="description"
                    label="Description"
                    fullWidth
                    multiline
                    variant="outlined"
                    onChange={handleInputChange}
                    value={video.description}
                  />
                </Grid>
              </CardContent>
              <CardActions disableSpacing>
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};
