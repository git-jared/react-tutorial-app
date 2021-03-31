import React from "react"

function Joke (props) {
    return(
        <div>
             <p style={{display: !props.question && "none"}}>{props.question}</p>
             <h3 style={{color: !props.question && "orange"}}> {props.punchLine}</h3>
             <hr/>

        </div>
       
    )
}

export default Joke