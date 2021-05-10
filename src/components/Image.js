import React from 'react'
import { useFirestore } from '../hooks/useFirestore'

export const Image = ({ setSelectedImg , text}) => {
   

    const {docs} =useFirestore('images')



 
    return (
     <>
            {docs.map((doc) => 
                    {return(
                        (doc.text===text)&&  <div className="img-wrap"    key={doc.id}  onClick={() => setSelectedImg(doc.url)} >
                    <img src={doc.url}  className="image" alt="uploaded pic"/>  
                </div>)}
            )
            }
     </>



     )
}
