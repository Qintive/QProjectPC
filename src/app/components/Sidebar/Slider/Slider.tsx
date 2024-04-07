"use client";

import style from "./Slider.module.scss";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import * as React from "react";


const images = [
  {
    titleOne: "-20% на",
    titleTwo: "ИГРОВЫЕ",
    titleThree: "решения",

    imgPath:
      "https://abrakadabra.fun/uploads/posts/2022-01/thumbs/1641145104_45-abrakadabra-fun-p-chernii-rabochii-fon-48.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "70%", flexGrow: 1, background: "black" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          height: 50,
          pl: 2,
          bgcolor: "black",
        }}
      ></Paper>
     
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  position: "relative",
                  height: 600,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  direction: "row",
                  maxWidth: 1000,
                  overflow: "hidden",
                }}
              >
                <img
                  src={step.imgPath}
                  alt={step.titleOne}
                  style={{
                    height: 450,
                    overflow: "hidden",
                    width: "100%",
                  }}
                />
                <img
                  src="/images/SliderPlus.png"
                  alt={step.titleOne}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <Typography
                  style={{
                    order: 2,
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  <div className={style.titleOne}>{step.titleOne}</div>
                  <div className={style.titleTwo}>{step.titleTwo}</div>
                  <div className={style.titleThree}>{step.titleThree}</div>
                </Typography>
              </Box>
            ) : null}
          </div>
        ))}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
