import React from "react";

//import react router
import { Link, Route, Switch } from "react-router-dom";


// Page Import
import UserDetail from "./UserDetailPage";

function UserLayout({ userinfos }) {
  const src = "/api/userinfo/img/";
//if youre  creating a classname please camelcase, so instead of linkimg do linkImg its just easier to read
  const userElement = userinfos.map(userinfo => (
    <div className={"likeProfile"}>
      <Link className={"likeLink"} to={`userinfo/Matches/${userinfo._id}`}>
        <div className={"linkImg"}>
          <img alt="filename" src={`${src}${userinfo.filename}`} width={400} />
        </div>
        <div className={"name"}>{userinfo.fName}</div>
      </Link>
    </div>
  ));
  return (
    <div>
      <Switch>
        <Route
          exact
          path={"/Matches"}
          render={() => <nav>{userElement}</nav>}
        />
        <Route
          path="/Matches/:id"
          render={({
            match: {
              params: { id }
            }
          }) => <UserDetail {...userinfo.find(user => id === user._id)} />}
        />
      </Switch>
    </div>
  );
}

export default UserLayout;
