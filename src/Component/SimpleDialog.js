import { Button, Dialog, DialogTitle } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useNavigate } from "react-router-dom";
// import api from 'api'
const SimpleDialog = ({ onClose, selectedValue, open }) => {
  const [question, setQuestion] = useState("");
  const [currentQuestion,setCurrentQuestion]=useState("")
  const handleClose = () => {
    onClose(selectedValue);
  };
  const navigate = useNavigate();
  let question_Array=useRef([]),count=0;
 async function getAnswer()
 {
     question_Array.current=question.split("!@#").map(substring => substring.replace(/\n/g, ''));
    setCurrentQuestion(question_Array.current[count])
 }

useEffect(()=>{
  
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-API-KEY': '75b0e688-4743-4cd9-8746-6c7e57f6f348'
        },
        body:JSON.stringify({question: currentQuestion})
      };
      
      fetch('https://api.writesonic.com/v2/business/content/ans-my-ques?engine=good&num_copies=1', options)
        .then(response => response.json())
        .then(response => {count++;
        if(count<question_Array.current.length-1){setCurrentQuestion(question_Array.current[count]);}
        else{}
        console.log(response)})
        .catch(err => console.error(err));
},[currentQuestion])
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ fontWeight: "700", fontFamily: "monospace" }}>
        Upload Your Question Here
      </DialogTitle>
      <textarea id="textarea"
        onChange={(e) => {
          setQuestion(document.getElementById("textarea").value.trim()
          );
        }}
        placeholder='Please add "!@#" at the end of every question question for example:What is photosynthesis!@#'
      >
      </textarea>
      <Button
        sx={{ color: "black" }}
        onClick={() => {
          if (question.length == 0) {
            alert("Please provide at least one question");
          } else {

            getAnswer();
            // navigate("/complete")
          }
        }}
      >
        Submit
      </Button>
    </Dialog>
  );
};

export default SimpleDialog;
