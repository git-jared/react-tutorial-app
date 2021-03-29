import React from "react"

function TodoItem () {
    const date = new Date();
    const hours = date.getHours();
    let style;
    if (hours < 12)
    {
        style = "orange"
    }
    else if (hours >= 12 && hours < 17)
    {
        style = "green"
    }
    else
    {
        style = "blue"
    }
    const styles = {
        color:style,
        marginLeft: 0,
        marginRight:0,

    }
    return (
        <div>
            <input type="checkbox"/>
            <p style={styles}>{style}</p>
        </div>
        
    )
}

export default TodoItem