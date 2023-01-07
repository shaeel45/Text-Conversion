import React, {useState} from 'react';


export default function Form(props) {
// eslint-disable-next-line no-unused-vars
const [text, setText] = useState('Enter yout Text here')
const handleUpCase = () =>{
    let newtext = text.toUpperCase(); 
    setText(newtext)
}

const removeSpace =()=>{
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(""))
}
const changeCase = () =>{
  let newtext = text.toLocaleUpperCase(); 
  setText(newtext)
}
const handleClear = () =>{
  let newtext = (""); 
  setText(newtext)
}
const handleLoCase = () =>{
    let newtext = text.toLowerCase(); 
    setText(newtext)
}
const handleUpChange = (event) =>{
    setText(event.target.value);
}

const handleCopytext = () =>{
  var text = document.getElementById("myBox");
  text.Select()
  navigator.clipboard.writeText(text.value)
}
  return (
    <>
    <div className="container py-2"><h1 className='text-center head'>{props.heading}</h1></div>
<div className="mb-3 my-5">
<h2>{props.label}</h2>
  <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleUpChange}></textarea>
</div>
<button className="btn btn-outline-primary mx-2" onClick={handleUpCase}>Convert to UpperCase</button>
<button className="btn btn-outline-warning mx-2" onClick={handleLoCase}>Convert to UpperCase</button>
<button className="btn btn-outline-dark mx-2" onClick={handleClear}>Clear Text</button>
<button className="btn btn-outline-success mx-2" onClick={changeCase()}>Change Case</button>
<button className="btn btn-outline-danger mx-2" onClick={removeSpace()}>Remove Spaces</button>
<button className="btn btn-outline mx-2" onClick={handleCopytext()}>Copy Text</button>

<div className="container">
<h2 className="py-3">Your Text Summary :</h2>
<p><b>{text.split(" ").length} Words {text.length} Characters</b></p>
<p><b>{0.008 * text.split('').length}</b></p>
<h2 className="py-2">Preview :</h2>
<p><b>{text}</b></p>
</div>
    </>
  )
}
