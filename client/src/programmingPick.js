import React from 'react'

import "./style/programmingPick.css"

function ProgrammingPick(){
    return(
        <select name="ProgrammingLanguage" id="programmingLanguage" multiple>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Csharp">C#</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
    )
}

export default ProgrammingPick;