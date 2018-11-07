import React from "react";
import {Link} from "react-router-dom"
import "./style/home.css";

function Home() {
  return (
    <div>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
      minima quibusdam voluptatem? Molestiae placeat tenetur architecto eaque
      dolorum atque excepturi autem, tempora quia illo voluptatibus, minus
      accusamus optio qui!
      </p>
          <Link to="./AccountCreate">Sign Up</Link>
    </div>
  );
}

export default Home;
