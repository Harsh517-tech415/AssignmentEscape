import React, { createContext, useState } from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home'
import Assignment from './Component/Assignment'
export const pageStyle=createContext()
const App = () => {
  const [open_snackbar, setOpen_SnackBar] = useState(false);
  const [fontFamily, setFontFamily] = useState("'Beth Ellen', cursive");
  const [fontSize, setFontSize] = useState(17);
  const [color, setColor] = useState("blue");
  const [pageColor, setPageColor] = useState("white");
  const [letterSpacing, setLetterSpacing] = useState(1);
  const [wordSpacing, setWordSpacing] = useState(1);
  const [lineHeight, setLineHeight] = useState(25.84);
  const [fontWeight, setFontWeight] = useState(300);
  const [line, setLine] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [margin, setMargin] = useState(false);
  const [marginTop, setMarginTop] = useState(false);
  const [width, setWidth] = useState(590);
  const [height, setHeight] = useState(460);
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  const [open_addFont, setOpen_addFont] = useState(false);
  return (
    <BrowserRouter>
    <pageStyle.Provider value={{
      open_snackbar, setOpen_SnackBar,
      fontFamily, setFontFamily,
      fontSize, setFontSize,
      color, setColor,
      pageColor, setPageColor,
      letterSpacing, setLetterSpacing,
      wordSpacing, setWordSpacing,
      lineHeight, setLineHeight,
      fontWeight, setFontWeight,
      line, setLine,
      shadow, setShadow,
      margin, setMargin,
      marginTop, setMarginTop,
      width, setWidth,
      height, setHeight,
      showColorPicker1, setShowColorPicker1,
      showColorPicker2, setShowColorPicker2,
      open_addFont, setOpen_addFont,
    }}>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/complete" element={<Assignment/>}/>
    </Routes>
    </pageStyle.Provider>
    </BrowserRouter>
  )
}

export default App