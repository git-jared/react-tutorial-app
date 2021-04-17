import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickSub = this.handleClickSub.bind(this)
    }


    handleClickAdd() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    

    handleClickSub() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClickAdd}>Add Change!</button>
                <br></br>
                <button onClick={this.handleClickSub}>Sub Change!</button>
            </div>
        )
    }
}

export default App
