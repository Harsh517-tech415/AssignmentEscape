import React, { useContext, useEffect, useRef, useState } from "react";
import lens from "../image/lens.jpg";
import { pageStyle } from "../App";
import { Box, Button, CardContent, Grid, Paper, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const Assignment = () => {
  const {
    open_snackbar,
    setOpen_SnackBar,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    color,
    setColor,
    pageColor,
    setPageColor,
    letterSpacing,
    setLetterSpacing,
    wordSpacing,
    setWordSpacing,
    lineHeight,
    setLineHeight,
    fontWeight,
    setFontWeight,
    line,
    setLine,
    shadow,
    setShadow,
    margin,
    setMargin,
    marginTop,
    setMarginTop,
    width,
    setWidth,
    height,
    setHeight,
    showColorPicker1,
    setShowColorPicker1,
    showColorPicker2,
    setShowColorPicker2,
    open_addFont,
    setOpen_addFont,
  } = useContext(pageStyle);
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [question, setQuestion] = useState([
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima. ",
    "Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
  ]);
  const [answer, setAnswer] = useState([
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima. ",
    "Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
  ]);
  const textDisplay = useRef();
  const averageCharWidth = 4;
  const averageCharsPerWord = 5;

  function setText() {
    let str = "";
    question.map((item, index) => {
      str = str + "\n" + item + "\n" + answer[index];
    });
    return str;
  }

  const text = useRef(setText());

  const calculateMaxWords = () => {
    const componentArea = width * height;
    const charArea = averageCharWidth * fontSize;
    const maxChars = Math.floor(componentArea / charArea);
    const maxWords = Math.floor(maxChars / averageCharsPerWord);
    return maxWords;
  };
  const maxWords = useRef(calculateMaxWords());
  const current_index = useRef(0);

  return (
    <>
    <Grid container  rowSpacing={{xs:3,sm:3,md:3,lg:3,xl:2}}>
      {a.map((item) => {
        text.current.length -
          (maxWords.current + current_index.current - current_index.current) >=
        maxWords.current + current_index.current - current_index.current
          ? (() => {
              textDisplay.current = text.current.substring(
                current_index.current,
                maxWords.current + current_index.current
              );
              current_index.current = maxWords.current + current_index.current;
              console.log(textDisplay.current);
            })()
          : (() => {
              textDisplay.current = text.current.substring(
                current_index.current,
                text.current.length
              );
            })();
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{
            display:{xs:"flex",sm:"flex",md:"flex"},
            justifyContent:"center"
          }}>
          <Paper
            elevation={3}
            square={true}
            className="paper"
            id="page"
            style={{
              
              width: width,
              height: height,
              backgroundImage: line
                ? "repeating-linear-gradient(transparent 0px, transparent 24px, #333333 25px)"
                : "none",
              backgroundColor: `${pageColor}`,
              WebkitBoxShadow: shadow
                ? "inset 18px 0px 50px -7px rgba(106,110,101,1)"
                : "none",
              MozBoxShadow: shadow
                ? "inset 18px 0px 50px -7px rgba(106,110,101,1)"
                : "none",
              boxShadow: shadow
                ? "inset 18px 0px 50px -7px rgba(106,110,101,1)"
                : "none",
            }}
          >
            <Typography
              onInput={(event) => {
                const updatedText = event.target.textContent;
                text.current = updatedText;
              }}
              contentEditable={true}
              className="output_text"
              style={{
                fontFamily: `${fontFamily}`,
                fontSize: `${fontSize}px`,
                color: `${color}`,
                letterSpacing: `${letterSpacing}px`,
                wordSpacing: `${wordSpacing}px`,
                lineHeight: `${lineHeight}px`,
                fontWeight: `${fontWeight}`,
                left: margin ? "2rem" : "0",
                borderLeft: margin ? "2px solid #666666" : "none",
                paddingLeft: margin ? "0.5rem" : "0",
                paddingTop: marginTop ? "1rem" : "0",
              }}
            >
              {textDisplay.current}
            </Typography>
          </Paper>
          <Button variant="contained" sx={{display:"inline",position:"absolute"}}><EditIcon/></Button>
          </Grid>
        );
      })}
    </Grid>
    <CardContent sx={{display:"flex",justifyContent:"center"}}>
    <Button variant='contained' color="secondary">Download Pdf</Button>
    </CardContent>
    </>
  );
};

export default Assignment;
