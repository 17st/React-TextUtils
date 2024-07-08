import React, {useState} from 'react'
import { RxLetterCaseUppercase } from "react-icons/rx";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { TbClearFormatting } from "react-icons/tb";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { IoBackspaceOutline } from "react-icons/io5";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Listened!", "success")
    }

    const handleCopy = () => {
        // console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success")
    }

    const handleReverse = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.split(' ').reverse().join(' ');
        setText(newText)
        props.showAlert("Text Reversed!", "success")
    }

   const [text, setText] = useState('Enter text here');
   //text = "new text"; //Wrong way to change the state
   //setText ("new text"); //Correct way to change the state
   return (
    <>
        <div className="container" style={{color: props.mode === 'dark'?'white': 'black'}}>
            <h2>{props.heading} </h2>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode === 'dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>  <RxLetterCaseUppercase /> Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}> <RxLetterCaseLowercase /> Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}> <TbClearFormatting /> Clear Text</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2"> <FaAssistiveListeningSystems /> Listen</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}> <FaRegCopy /> Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> <IoBackspaceOutline /> Remove Extra Space </button>
            <button className="btn btn-primary mx-1" onClick={handleReverse}> <BsReverseLayoutTextSidebarReverse /> Reverse Text </button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white': 'black'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(/\s+/).length} word and {text.replace(/\s/g, '').length} characters</b></p>
            <p>{0.008 * text.split(/\s+/).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            <h3>Reversed Text:</h3>
            <p>{text}</p>
        </div>
    </>
  );

};

