import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("convert to UpperCase","success")
  }
  const handleLoClick = ()=> {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("convert to LowerCase","success")
  }
  const handleClearClick = ()=> {
    let newText =' ';
    setText(newText);
    props.showAlert("Text Cleared","success")
  }
  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const [Text, setText] = useState('');

  return (
    <>
    <div className="form-floating " style = {{color: props.mode ==='dark'?'white':'black'}}>
    <h3>{props.heading}</h3>
  <textarea className="form-control" value = {Text} onChange = {handleOnChange} id="mybox" rows = "8" style = {{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}></textarea>
<button className = "btn btn-primary my-3" onClick = {handleUpClick}>convert to uppercase</button>
<button className = "btn btn-primary mx-3" onClick = {handleLoClick}>convert to Lowercase</button>
<button className = "btn btn-primary my-3" onClick = {handleClearClick}>Clear the Text</button>

</div>
<div className = "container" style = {{color: props.mode ==='dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <p>{Text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and  {Text.length} characters</p>
  <p>{0.008 * Text.split(" ").length} minutes to read</p>
  <h4>Preview</h4>
  <p>{Text.length>0?Text:'Enter something to preview it here'}</p>
</div>
</>
  )
}
