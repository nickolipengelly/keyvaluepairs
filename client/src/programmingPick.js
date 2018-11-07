import React from 'react'

import "./style/programmingPick.css"

function ProgrammingPick(){
    return(
        <div>
        <select name="ProgrammingLanguage" id="ProgrammingLanguage" multiple>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Csharp">C#</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        </div>    
    
    )
}

export default ProgrammingPick;