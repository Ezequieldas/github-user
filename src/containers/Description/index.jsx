/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <Fragment>
      <Stack sx={{ justifyContent: "center" }}>
        <Typography variant="body1">{bio}</Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  );
};

export default Description;
