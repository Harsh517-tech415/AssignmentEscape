import React, { useContext, useEffect, useRef, useState } from "react";
import lens from "../image/lens.jpg";
import { pageStyle } from "../App";
import { Paper, Stack, Typography } from "@mui/material";

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
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima. Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
  ]);
  const [answer, setAnswer] = useState([
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
    " Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    "Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima. Officiis recusandae et accusantium eius quia aperiam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ex quidem iste repudiandae sit suscipit accusamus nesciunt laudantium! Ipsam non similique ad minima.",
  ]);
  const text = useRef("");
  const averageCharWidth = 4; // Example average character width value in pixels
  const averageCharsPerWord = 5; // Example average number of characters per word

  useEffect(() => {
    question.map((item, index) => {
      text.current = text.current + "\n" + item + "\n" + answer[index];
    });
  }, []);

  const calculateMaxWords = () => {
    const componentArea = width * height;
    const charArea = averageCharWidth * fontSize;
    const maxChars = Math.floor(componentArea / charArea);
    const maxWords = Math.floor(maxChars / averageCharsPerWord);
    return maxWords;
  };

  const maxWords = useRef(calculateMaxWords());
  const current_index = 0;
 function returnText()
 {
  
  if (
    text.current.length - (maxWords - current_index) >=
    maxWords - current_index
  ) {
    console.log(text.current)
    return (text.current.substring(current_index, maxWords.current+current_index));
    current_index = maxWords.current;
  } else {
    console.log(text.current)
   return( text.current.substring(current_index,text.current.length));
  }
 }
  return (
    <Stack gap>
      {a.map((item) => (
        <Paper
          elevation={3}
          square={true}
          onChange={() => {
            console.log(1);
          }}
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
            // inputRef={text}
            onInput={(event) => {
              const updatedText = event.target.textContent;
              text.current = updatedText;
              console.log(text.current); // updated text value
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
            {returnText}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
};

export default Assignment;
