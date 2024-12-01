import React, {useState} from "react"
import axios from "axios";


export default function Dictionary() {

const [word, setWord]=useState("")

function displayResponse(response) {


}


function search(event) {
event.preventDefault();


let apiKey = "2ob113a879d9f74f53b31fb0t04ab5cb"
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}` 
console.log(apiUrl);
axios.get(apiUrl).then(displayResponse);
console.log(displayResponse.data)
}

function handleChange(event) {
    
setWord(event.target.value);

}


return (
    
   <div className="dictionary"> 
    <form onSubmit={search}>
         <input type="search" onChange={handleChange} />
     </form>
     </div>
 
       
 )
 }
 
