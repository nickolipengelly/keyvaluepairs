import React from "react";
import ProgrammingPick from "./programmingPick";
import LanguagePick from "./languagePick";

import "./style/profile.css"

function Profile() {
  return (
    <div className="profile">
      <form>
        <ProgrammingPick />
        <LanguagePick />
        <label for="avatar">Profile Picture: </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png,image/jpeg"
        />
        <textarea name="bio" rows="40" cols="80" />
        <button className="profileButton">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
