import React ,  { useState  } from 'react'

export default function Textform(props) {
  const handleUpClike = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChnage = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <div className="form-group">
      <label htmlFor ="exampleFormControlTextarea1">{props.name}</label>
      <textarea className="form-control" value={text} onChange = {handleOnChnage} id="exampleFormControlTextarea1" rows="8"></textarea>
      <button type='button' onClick={handleUpClike} className='btn btn-primary my-3'>convert to upercase</button>
    </div>
  )
}
