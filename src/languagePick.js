import React from 'react'

function LanguagePick(){
    return(
        <select name="spokenLanguage" id="spokenLanguage" multiple>
            <option value="">English</option>
            <option value="">Spanish</option>
            <option value="">Pashto</option>
            <option value="">Mandarin</option>
        </select>
    )
}

export default LanguagePick;