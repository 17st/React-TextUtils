import React, { useState } from 'react';
import { RxLetterCaseUppercase } from "react-icons/rx";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { TbClearFormatting } from "react-icons/tb";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { IoBackspaceOutline } from "react-icons/io5";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const [newText, setNewText] = useState(''); // Declare newText state

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Listened!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleReverse = () => {
        let reversedText = text.split(' ').reverse().join(' ');
        setNewText(reversedText);
        props.showAlert("Text Reversed!", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}><RxLetterCaseUppercase /> Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}><RxLetterCaseLowercase /> Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}><TbClearFormatting /> Clear Text</button>
                <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2"><FaAssistiveListeningSystems /> Listen</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}><FaRegCopy /> Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}><IoBackspaceOutline /> Remove Extra Space </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}><BsReverseLayoutTextSidebarReverse /> Reverse Text </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.replace(/\s/g, '').length} characters</b></p>
                <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
                <h3>Reversed Text:</h3>
                <p>{text.length > 0 ? newText : "Nothing to Reverse Text"}</p> {/* Display the reversed text here */}
            </div>
        </>
    );
};
