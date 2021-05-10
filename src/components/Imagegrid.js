import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { Image } from './Image';

export const Imagegrid = ({setSelectedImg}) => {

    const {docs} =useFirestore('images')

    const list=[];
    docs.map((ele)=>{
        if(list.includes(ele.text)===false){
        list.push(ele.text)
        // console.log(ele.id)
    }
    })
    
    return (
       <>
    {list && list.map((ele) =>{
    return(<>
    <h1>{ele}</h1>
        <div className="img-grid"  key={ele.id} >
        
       <Image  setSelectedImg={setSelectedImg}   text={ele}/>
        </div>
        <hr/>
        </>
    )}
)}
       </>
    )
}
