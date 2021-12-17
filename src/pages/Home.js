import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import UserCard from "../components/UserCard";
import { useInfiniteScroll } from "../utils/infiniteScroll";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
}));

const Home = () => {
  const classes = useStyles();

  const { items: users } = useInfiniteScroll(
    "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user"
  );

  const EmptyUsers = () => (
    <Typography variant="subtitle1">Loading...</Typography>
  );

  const FilledUsers = () => (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Grid container spacing={2}>
          {users &&
            users.map((item) => {
              return (
                <Grid item key={item.id} lg={3} xs={12}>
                  <UserCard key={item.id} item={item} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      {users.length ? <FilledUsers /> : <EmptyUsers />}
    </div>
  );
};

export default Home;
