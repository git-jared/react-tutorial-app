import React from "react"

import Joke from "./components/Joke.js"

function App (){
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubles = nums.map(function(num) {
        return num * 2
    })
    console.log(doubles);
    return (
        <div>
            <Joke
                punchLine ="Joe Moma"
            />
            <Joke
                question ="What is Thor’s favourite ice cream?"
                punchLine ="Thornsicle"
            />

            <Joke
              question ="How did the dentist become a brain surgeon?"
              punchLine ="Their drill slipped!"
              />

            <Joke
            question ="What’s the best thing about Switzerland?"
            punchLine ="I don’t know but the flag is a big plus!"
            />

            <Joke
            question ="What did the DNA say to the other DNA?"
            punchLine ="Do these genes make me look fat?"/>

            <Joke
            question ="What will the dentist give you for a dollar?"
            punchLine ="Buck teeth!"/>


        </div>
    )
}

export default App