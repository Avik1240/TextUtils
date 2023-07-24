import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase!", "success")
    }
    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked " + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to LowerCase!", "success")
    }
    const handleExtraSpaces = ()=>{
        //console.log("Rmove extra spaces");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }
    const handleCopy = ()=>{
        //console.log("Copy Text");

        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleClearText = ()=>{
        //console.log("Copy Text");
        let newText='';
        setText(newText);
        props.showAlert("Text cleared!", "success")
    }
    const handleSearchClick = ()=>{
        //console.log("Search word was clicked " + text);
        let newText=prompt("Type the word you want to search");
        let isText=-1; 
        isText = text.search(newText);
        if(isText === -1){
            
            props.showAlert("Word not found!", "danger")
        }
        else{
            props.showAlert("Word found at index no. "+ isText, "success")
        }
    }   
    const handleOnChange = (event)=>{
        //console.log("OnChange");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    //text="hrhudhjcj"; wrong way to change text
    //setText("fbhhhjf"); correct way to change text
  return (
    <>
    <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleSearchClick}>Search for a word</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearText}>Clear Text</button>
        </div>
    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{/*This is a logic to count words without counting spaces*/text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter(word => word !== '').length} Minutes to read</p>
    </div>
    </>
  )
}
