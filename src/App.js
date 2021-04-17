import React, {Component} from "react"


class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true,
        }
    }
    render(){
        let wordDisplay;
        if(this.state.isLoggedIn){
            wordDisplay = 'in'

        }
        else{
            wordDisplay = 'out'
        }
        
        return(
            <h1>Hello! you're logged {wordDisplay}</h1>
        )
    }
}

export default App