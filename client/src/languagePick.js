import React from 'react'

import "./style/languagePick.css"

function LanguagePick(props) {

        return (
            <select onChange={props.handleChange} value={props.spokenLanguage} name="spokenLanguage" id="spokenLanguage" multiple>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Pashto">Pashto</option>
                <option value="Mandarin">Mandarin</option>
            </select>


        )
    }

export default LanguagePick;