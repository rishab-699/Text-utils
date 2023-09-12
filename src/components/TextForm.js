import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(''); //setting text variable (it is a react hook)

    const HandleUpClick= () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('converted to uppercase','success');
    }
    const HandledownClick= () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('converted to lowercase','success');
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'>
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.headings}</h1>
        <div className="mb-3" >
            <textarea className="form-control" style={{background:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" onChange={handleChange} rows="3"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={HandleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary' onClick={HandledownClick}>Convert to lowercase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text === ''?'Enter the text to preview':text}</p>

    </div>
    </>
  )
}
