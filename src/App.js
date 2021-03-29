import React from "react"
import TodoItem from "./components/TodoItem"
import ContactCard from "./components/ContactCard"


function App (){
    return (
        <div>
            <ContactCard 
            contact = 
            {{
             name:"Mr.Whiskerson",
             imageUrl:"http://placekitten.com/300/200",
             phone:"(212) 555-1234",
             email:"mr.whiskaz@catnap.meow" 
            }}
            />

            <ContactCard
            contact = {{
                name:"Fluffykins",
                imageUrl:"http://placekitten.com/400/200",
                phone:"(212) 555-2345",
                email:"fluff@me.com"
            }}
            />
            
    

        </div>
       
    )
}

export default App