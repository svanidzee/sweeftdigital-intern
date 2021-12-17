import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const UserInfo = ({ user }) => {
  const theme = useTheme();

  const mathesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <fieldset style={{ border: "1px solid #ddd" }}>
      <legend>Address</legend>
      <Grid item container direction="column" md>
        <Grid item>
          <Typography variant="h4" align={mathesSM ? "center" : "right"}>
            Info
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            {user.prefix}
            {user.name} {user.lastName}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            Email: {user.email}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            Ip Address: {user.ip}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            Job Area: {user.jobArea}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            Job Type: {user.jobType}
          </Typography>
        </Grid>
      </Grid>
    </fieldset>
  );
};

export default UserInfo;
