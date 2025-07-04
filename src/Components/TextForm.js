import React, { useState } from 'react'


export default function TextForm(props) {

    const handalUpClick = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handalLoClick = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handalOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    const handalClearClick = (event) => {
        //console.log("On change");
        setText(" ");
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handalOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handalUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handalLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handalClearClick}>Clear Text</button>
                </div>

            <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
