import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const ToUpperCase = () => {
        let toSetText = text.toUpperCase();
        setText(toSetText);
        props.ShowAlert("Converted to UpperCase.", 'success')
    }

    const ToLowerCase = () => {
        let toSetText = text.toLowerCase();
        setText(toSetText);
        props.ShowAlert("Converted to LowerCase.", 'success')
    }

    const ToCapitalizedCase = () => {
        let TextToChange = '';
        let NewTextVal = text.split(" ");
        for (let i = 0; i < NewTextVal.length; i++) {
            TextToChange += NewTextVal[i].charAt(0).toUpperCase() + NewTextVal[i].slice(1).toLowerCase() + " ";
            setText(TextToChange);
        }
        props.ShowAlert("Converted to Capitalized Case.", 'success')
    }

    const ChangeText = (event) => {
        setText(event.target.value)
    }

    const myStyleOne = {
        backgroundColor: props.mode === "light" ? "white" : "#1b2142",
        color: props.mode === "light" ? "black" : "white"
    }
    const myStyleTwo = {
        backgroundColor: props.ThemeColor,
        color: "white"
    }
    const setMyStyle = props.modeType ? myStyleTwo : myStyleOne

    return (
        <div className="container my-5">
            <h1 style={setMyStyle}>{props.heading}</h1>
            <textarea style={setMyStyle} className="form-control" rows="10" placeholder="Enter Text Here" value={text} onChange={ChangeText} />
            <button className='btn btn-info my-5 mx-3 btn-sm ' onClick={ToUpperCase} >To UpperCase</button>
            <button className='btn btn-info my-5 mx-3 btn-sm ' onClick={ToLowerCase} >To LowerCase</button>
            <button className='btn btn-info my-5 mx-3 btn-sm ' onClick={ToCapitalizedCase} >To Capitalized Case</button>
            <h1 style={setMyStyle}><i>Showing Output Here</i></h1>
            <p style={setMyStyle} className='MyPara'>{text}</p>
            <h1 style={setMyStyle}><i>Showing Number of Words and Characters</i></h1>
            <p style={setMyStyle}><b>{text.split(" ").filter((value) => { return value.length !== 0 }).length}</b> Words and <b>{text.length}</b> Characters</p>
        </div>
    )
}
