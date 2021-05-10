import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const types =[ 'image/png', 'image/jpeg', 'image/jpg'  ,'img/jpeg', 'img/jpg' ];
function UploadForm() {

    const [error , setError] = useState(null);
    const [file, setFile]=useState(null);
    const [text, setText]=useState('');



const list=[];
    const changeHandler =(e)=>{
             const clicked = e.target;
         const ele = clicked.files; 
         for (let i = 0; i < ele.length; i++) {
         
            var selected= ele[i]
            if(selected && types.includes(selected.type)){
                list.push(selected)
                setFile(selected);
                setError("");
            }else{
                setFile(null);
                setError('Please select an image file');
            }
         }
        
      
    }    
    
    const onchangeHandler =(e)=>{
        const clicked = e.target;
        const selected = clicked.value;    
        if(selected ){
            setText(selected.toUpperCase());
            setError("");
        }else{
            setText('');
            setError('Please enter Descreption');
        }
    }


 

    return (
        <>
        
        <form className="form"> 
                <h3  style={{}}>ADD NEW IMAGES</h3>
            <input type="text" placeholder="Enter descreption" onChange={onchangeHandler} /> <br/> <br/>
            {text&& <h3>Select File</h3>}
          {text&&  <label>
            <input type="file" onChange={changeHandler} /> 
                    +   
             </label>}
        
            <div className="output"  >
            {error && <div className="error" > {error} </div>}
            {file && <div  > {file.name} </div>}
            
    {
               file && <ProgressBar file={file} setFile={setFile} text={text} />
            } 

            </div>
        </form>
        </>
    )
}

export default UploadForm
