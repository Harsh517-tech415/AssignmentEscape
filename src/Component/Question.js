import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SimpleDialog from "./SimpleDialog";

const Question = () => {
    const [open,setOpen]=useState(false);
    const handleClickOpen=()=>
    {
        setOpen(true)
    }
    const handleClose=()=>
    {
        setOpen(false);
    }
  return (
    <Box sx={{ backgroundColor: "rgb(0,0,0,.4)", pt: "100px" }}>
     <Stack sx={{p:"0px 20px"}}>
      <Typography
        sx={{
          mb: "10%",
          fontFamily: "monospace",
          textAlign: "center",
          fontSize: {
            xs: "1.8vw",
            sm: "1.7vw",
            md: "1.7vw",
            lg: "1.5vw",
            xl: "1.4vw",
          },
        }}
      >
        Revolutionize Your Assignments: Get Handwritten Assignments With Just a
        Few Clicks!
      </Typography>
<Box sx={{display:"flex",justifyContent:"center"}}>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            display:"block",
            backgroundColor: "black",
            borderRadius: "100px",
            fontSize: { sm: "1.5vw", lg: "1vw" },
            width: "200px",
            height: "65px",
          }}
        >
          Upload Here
        </Button>
        </Box>
        <SimpleDialog
        open={open}
        onClose={handleClose}/>
        </Stack>
    </Box>
  );
};

export default Question;
