import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardMedia, CardContent } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  link: {
    color: "black",
    textDecoration: "none",
  },
}));

const UserCard = ({ item, handleRedirect }) => {
  const classes = useStyles();
  return (
    <Card>
      <Link
        className={classes.link}
        to={`/usr/${item.id}`}
        onClick={handleRedirect}
      >
        <CardMedia
          image={`${item.imageUrl}?v=${item.id}`}
          title={item.title}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${item.prefix}${item.name} ${item.lastName}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {item.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default UserCard;
