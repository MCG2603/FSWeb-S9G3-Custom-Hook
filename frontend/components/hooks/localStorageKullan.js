import { useState } from "react";

export function localStorageKullan(key,value){
    const [state, setState]=useState(()=>{
        if(!localStorage.getItem(key)=='undefined'){
           
            return JSON.parse(localStorage.getItem(key));
          
            
        }
        else{
    
            localStorage.setItem(key,JSON.stringify(value));
            return value;
        }
    });
     const valueUpdate=(value)=>{
        localStorage.setItem(key,JSON.stringify(value));
        setState(value);
        return value;

     };
     return[state,valueUpdate];
    

}