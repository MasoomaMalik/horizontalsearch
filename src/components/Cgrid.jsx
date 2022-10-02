import React from 'react'
import {
    Paper,
    Grid,
    Box,
    Chip,
    Tooltip,
    Stack,
    IconButton,
    Typography,
  } from "@mui/material";
const Cgrid = ({e},{i}) => {
  return (
    <Grid item md={3} xs={12} sm={6} key={i} className="grid-container">
    <Box className="bgLight">
      <Chip label={e.category} />

      <img src={e.image} alt="" height={100} className="grid-img" />
      <Tooltip title={e.title}>
        <Typography
          sx={{ height: 60, overflow: "hidden" }}
          variant="h6"
        >
          {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
        </Typography>
      </Tooltip>
      <Typography variant="h5">Rs {e.price}/-</Typography>
    </Box>
  </Grid>
  )
}

export default Cgrid