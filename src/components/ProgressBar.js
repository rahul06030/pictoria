import React,{useEffect} from 'react'
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile,text }) => {
const {url, progress} = useStorage(file,text);
useEffect(() => {
    if(url) {
        setFile(null);
    }
}, [url,setFile]);
    return (

        <div className="progress-bar" style={{width: `${~~progress}%`} }>{~~progress}%
        </div>
    )
}

export default ProgressBar;
