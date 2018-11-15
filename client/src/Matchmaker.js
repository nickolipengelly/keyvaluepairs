import React from 'react'
import "./style/matchmaker.css"



function Matchmaker (){
    return(
        // const newMatch = props.userinfo._id((values, index))
        <div className="matchmakerDiv">
            <img className="avatar" alt="avatar"></img>
           <h4>First Name: </h4>
           <h4 className="fname">Placeholder for props.fName</h4>
           <h4>Last Name: </h4>
           <h4 className="lname">Placeholder for props.lName</h4>
           <h4>Experience: </h4>
           <h4 className="experience">Placeholder for props.experience</h4>
           <h4>Programming Language: </h4>
           <h4 className="programming">Placeholder for props.programmingLanguage</h4>
           <h4>Spoken Language</h4>
           <h4 className="spoken">placeholder for props.spokenLanguage</h4>
           <h4>THUMBS UP PLACEHOLDER</h4>
           <h4>TRASH CAN PLACEHOLDER</h4>
          
           <h4>Additional Placeholder</h4>
           
        </div>
    )
}

export default Matchmaker;