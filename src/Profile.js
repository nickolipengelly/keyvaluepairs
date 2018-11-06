import React from "react";


import ProgrammingPick from './programmingPick';
import LanguagePick from './languagePick';


function Profile() {
  return (
    <div>
       <form>
           <ProgrammingPick />
           <br/>
           <LanguagePick />
           <br/>
           <textarea name="bio" rows="40" cols ="80" /> 
           <button>Submit</button>
       </form>
    </div>
  );
}

export default Profile;