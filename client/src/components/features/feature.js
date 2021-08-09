// // Feature component
// import React,{useEffect, useState} from "react";
// import "./feature.css";
// import Button from "../button/button";
// import deadlinesIcon from "./features-img/deadlines-icon.png"

// const URL = "https://source.unsplash.com/random/500x300";

// // const Feature = (imgSrc,style1,style2,defaultPattern)
// const Feature = (props) => {

//   const {style,imgSrc,text,featureIcon,featureTextIconName,btnOnClick} = props;

//     return (
//       <div className={style}>
//         <div className="featureImg">
//           {/* <img src={imgSrc} alt="" /> */}
//           <img src={imgSrc} alt="" />
//         </div>
//         {/* <div className="featureText">{text}</div> */}
//         <div className="featureTextParent">
//           <div className="featureText">
//             <div className="featureTextIcon">
//               <h1>{featureTextIconName}</h1>
//               <img src={featureIcon} alt="" />
//             </div>
//             <div className="featureTextContent">
//               {text}
//             </div>
//             <div className="featureTextButton">
//               <Button onClick={btnOnClick} buttonSize="btn--try-it-out-size">Try it out</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );

// };

// export default Feature;

import "./feature.css";
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardContent,
  Box,
  Avatar,
  Button,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from "./feature-data";

const useStyles = makeStyles((theme) => ({
  iconFeature: {
    marginLeft: "16px",
    width: "50px",
    height: "50px",
  },
}));

function Feature(props) {
  const {
    id,
    imgSrc,
    featureTextIconName,
    featureIcon,
    text,
    style,
    borderColor,
  } = props;
  const temp = id % 2;
  console.log(temp);
  const classes = useStyles();

  return (
    <Grid item direction="row">
      <Card
        className="featureCard"
        style={{
          flexDirection: `${style}`,
          boxShadow: "unset",
        }}
      >
        <Box
          className="cardContent"
          style={{
            direction: `${!temp ? "ltr" : "rtl"}`,
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={featureIcon}
                className={classes.iconFeature}
              ></Avatar>
            }
            title={
              <Typography
                className="featureTitle"
                variant="h4"
                style={{ fontFamily: "Roboto Slab" }}
              >
                {featureTextIconName}
              </Typography>
            }
          ></CardHeader>
          <CardContent
            variant="p"
            color="textSecondary"
            className={classes.paragraph}
            style={{
              direction: "ltr",

              textAlign: `${temp ? "right" : "left"}`,
            }}
          >
            {text}
          </CardContent>

          {/* this image will appear when screen sixe is less than 600px */}
          <div className="smallScreenImg">
            <CardMedia
              image={imgSrc}
              style={{
                height: "200px",
                width: "90vw",
                // transform: `${temp ? "scaleX(-1)" : "scaleX(1)"}`,
                borderRadius: "30px 30px 0 0",
                margin: "auto",
                borderBottom: `${borderColor}`,
              }}
            ></CardMedia>
          </div>

          <CardActions>
            <Button
              style={{
                background:
                  "linear-gradient(180deg, rgb(176 255 223), rgb(0, 255, 153))",
              }}
            >
              Try it out
            </Button>
          </CardActions>
        </Box>
        <Box className="largeScreenImg">
          <CardMedia
            image={imgSrc}
            style={{
              height: "200px",
              transform: `${temp ? "scaleX(-1)" : "scaleX(1)"}`,
              borderRadius: "30px 0 0 30px",
              margin: `${temp ? "auto 100px auto 0" : "auto 0 auto 100px"}`,
              borderRight: `${borderColor}`,
            }}
          ></CardMedia>
        </Box>
      </Card>
    </Grid>
  );
}

export default Feature;
