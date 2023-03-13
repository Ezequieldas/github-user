/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props
  const {
    location,
    company
  } = userState;
  return(
    <Grid
      container
      spacing={2}
      sx={{marginTop:'15px'}} 
    >
      <Grid item xs={6 }>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <LocationOnIcon/>
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {company !== null
            ? <Typography>{company}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInformation;