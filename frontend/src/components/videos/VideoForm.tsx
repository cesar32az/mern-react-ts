import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  TextField,
  makeStyles
} from "@material-ui/core";
import React, { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
  card: {
    
  }
}));

export const VideoForm = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardHeader title="New Video" />
            <CardContent>
            <form className={classes.root} >
              <Grid container justify="center">
                <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid container justify="center">
                <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid container justify="center">
                <TextField id="standard-basic" label="Standard" />
                </Grid>  
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};
