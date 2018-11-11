import React from "react";

function UserDetail({
  _id,
  filename,
  fName,
  lName,
  age,
  gender,
  programmingLanguage,
  bio,
  experience,
  position
}) {
  const src = "/api/userinfo/img/";

  return (
    <div key={_id} className={"swipePage"}>
      <button
        onClick={() => {
          return this.props.history.push("/Matches");
        }}
      >
        Back
      </button>
      <div className={"swipePageImg"}>
        <img alt="filename" src={`${src}${filename}`} width={200} />
      </div>

      <div className="swipePageText">
        <h1>
          {fName}
          {lName}
        </h1>
        <br />
        <h3>Current Position: {position}</h3>
        <br />
        <h3>{bio}</h3>
        <br />
        <h4>Experience: {experience}</h4>
        <br />
        <h4>Programming Languages: {programmingLanguage}</h4>
        <br />
        <h5>Age: {age}</h5>
        <h5>Gender: {gender}</h5>
      </div>
    </div>
  );
}

export default UserDetail;

console.log(UserDetail)