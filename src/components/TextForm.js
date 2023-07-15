import React,{useState} from 'react'

export default function TextForm(props) {
      const handleUpclick=()=>{
            // console.log("Uppercase was clicked");
            let UpText=text.toUpperCase();
            setText(UpText);
            props.showAlert("Converted to Uppercase","success");
      }  
      const handleDownclick=()=>{
            let LowText=text.toLowerCase();
            setText(LowText);
            props.showAlert("Converted to Lowercase","success");
      }   
      const handleOnchange=(event)=>{
            // console.log("Onchange");
            setText(event.target.value);
            
      }
      const handleClearclick=()=>{
            let cleartext = '';
            setText(cleartext);
            props.showAlert("Text Cleared","success");
      }
      const handleReverse=()=>{
            let revtext = "";
            for (let i = text.length - 1; i >= 0; i--) {
                  revtext += text[i];
            }
            setText(revtext);
            props.showAlert("Converted to reverse","success");
      }
      const handleCopy=()=>{
            let copytext = document.getElementById("mybox");
            copytext.select();
            navigator.clipboard.writeText(copytext.value);
            // alert("Copied the text: "+copytext.value);
            setText(copytext);
            props.showAlert("Copied text successfully","success");
      }
      const [text, setText] = useState('');
      // setText('New Text');
      return (
            <>
            <div className="container my-3" style={{color: props.color}}> 
            {/* (props.mode==='dark'?'white':'#042743') */}
                  <div className="my-3">
                        <h1>Enter the text to analyze</h1>
                        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'white':'black'}} onChange={handleOnchange} id="mybox" rows="8"></textarea>
                  </div>
                  <button className='btn btn-primary mx-1' onClick={handleUpclick}>Convert To Uppercase</button>
                  <button className='btn btn-primary mx-1' onClick={handleDownclick}>Convert To Lowercase</button>
                  <button className='btn btn-primary mx-1' onClick={handleClearclick}>Clear Text</button>
                  <button className='btn btn-primary mx-1' onClick={handleReverse}>Reverse Text</button>
                  <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="continer my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                  <h1>Your text summary</h1>
                  <p>{text.split(" ").length} words and  {text.length} characters</p>
                  <p>{0.008*text.split(" ").length} Minutes read</p>
                  <h2>Preview</h2>
                  <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
            </>
  );
}

// TextForm.propTypes={heading: PropTypes.string}