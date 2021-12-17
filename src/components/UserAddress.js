import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const UserAddress = ({ user }) => {
  const theme = useTheme();

  const mathesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <fieldset style={{ border: "1px solid #ddd" }}>
      <legend>Address</legend>
      <Grid item container direction="column" md>
        <Grid item>
          <Typography variant="h4" align={mathesSM ? "center" : "right"}>
            Address
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            {user.company.name} {user.company.suffix}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            City: {user.address.city}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            Country: {user.address.country}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            State: {user.address.state}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            Street Address: {user.address.streetAddress}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={mathesSM ? "center" : "right"}
          >
            ZIP: {user.address.zipCode}
          </Typography>
        </Grid>
      </Grid>
    </fieldset>
  );
};

export default UserAddress;
