import React, {useState} from "react"

export default function Dictionary() {

const [word, setWord]=useState("")

function search(event) {
event.preventDefault();
alert(`searching for the meanng of "${word}"`);
}

function handleChange(event) {
    
setWord(event.target.value);
console.log(event.target.value);
}


return (
    
   <div className="dictionary"> 
    <form onSubmit={search}>
         <input type="search" onChange={handleChange} />
     </form>
     </div>
 
       
 )
 }
 
