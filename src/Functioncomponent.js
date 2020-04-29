import React from 'react'

const myFunc=()=>{
    document.getElementById("p1").innerHTML="I'm Chinchu";
}

function Functioncomponent(){
    return(
        <div>
            <button onClick={myFunc}>My Intro</button>
            <p id="p1"></p>

        </div>
    )
}
export default Functioncomponent
























































