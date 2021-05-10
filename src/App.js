import './App.css';
import UploadForm from './components/UploadForm';
import View from './components/View';
import React, { useState } from 'react';
import { Imagegrid } from './components/Imagegrid';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
              <h1 style={{width:'100%' ,background:'white', marginBottom:'5%' ,  color:'black'}}> Pictoria </h1>

      <Imagegrid setSelectedImg={setSelectedImg}/>
      { selectedImg && (
        <View selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      
      <UploadForm/>
    </div>
  );
}

export default App;
