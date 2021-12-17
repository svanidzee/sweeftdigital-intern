import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  useMediaQuery,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";

import UserCard from "../components/UserCard";
import UserInfo from "../components/UserInfo";
import UserAddress from "../components/UserAddress";
import FriendNavigationContext from "../utils/FriendNavigation/FriendNavigation";
import { useInfiniteScroll } from "../utils/infiniteScroll";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
  media: {
    height: 340,
    width: 240,
  },
}));

const User = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { id } = useParams();

  const mathesMD = useMediaQuery(theme.breakpoints.down("md"));
  const mathesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { friends: friendsNavigation, setNextFriend } = useContext(
    FriendNavigationContext
  );

  const [user, setUser] = useState();

  const { items: friends } = useInfiniteScroll(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends`
  );

  // user
  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await axios.get(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
        );

        setUser(userResponse.data);
      } catch (error) {
        alert("error ;(");
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  const EmptyUser = () => (
    <Typography variant="subtitle1">Loading...</Typography>
  );

  const FilledUser = () => (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems={mathesMD ? "center" : undefined}
        direction={mathesMD ? "column" : "row"}
        justifyContent="space-around"
        className={classes.rowContainer}
      >
        {/* Image */}
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={mathesSM ? "column" : "row"}
          style={{ marginBottom: mathesMD ? "5em" : 0, marginTop: "0.70em" }}
          md
        >
          <Grid item container direction="column" md>
            <Card style={{ maxWidth: "15em" }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`${user.imageUrl}?v=${user.id}`}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        {/* Info */}
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={mathesSM ? "column" : "row"}
          md
        >
          <UserInfo user={user} />

          <UserAddress user={user} />
        </Grid>
      </Grid>

      <Grid item container direction="column" md style={{ marginTop: "3em" }}>
        {friendsNavigation.map((user) => (
          <Link key={user.id} to={`/usr/${user.id}`}>
            {user.prefix}
            {user.name} {user.lastName}
          </Link>
        ))}
      </Grid>

      {/* Friends */}
      <Grid item container direction="column" md style={{ marginTop: "3em" }}>
        <Grid item>
          <Typography variant="h4">Friends:</Typography>
        </Grid>

        <Grid container style={{ marginTop: "1em" }}>
          <Grid item xs={10}>
            <Grid container spacing={2}>
              {friends &&
                friends.map((item) => {
                  return (
                    <Grid item key={item.id} lg={3} xs={12}>
                      <UserCard
                        key={item.id}
                        item={item}
                        handleRedirect={() => setNextFriend(item)}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <div className={classes.root}>
        {user ? <FilledUser /> : <EmptyUser />}
      </div>
    </div>
  );
};

export default User;
