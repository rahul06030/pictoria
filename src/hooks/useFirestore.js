import React,{useEffect, useState} from 'react'
import { firestore } from '../firebase/config';

export const useFirestore = (collection) => {
   const [docs,SetDocs] =useState([]); 
    
   useEffect(()=>{
      const unsub= firestore.collection(collection)
       .orderBy('createdAt', 'desc')
       .onSnapshot((snap)=>{
           var documents = [] ;
           snap.forEach(doc => {
               documents.push({...doc.data() , id:doc.id})
           });
           SetDocs(documents);
       })
       return ()=> unsub();
   },[collection]);
    return {docs};
}
