import React from "react";
import { Link } from "react-router-dom";
import "./style/home.css";

function Home() {
  return (
    <div className="home">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel,
        reiciendis suscipit accusamus ab ea possimus eaque eligendi? Iste a
        ducimus magni autem suscipit eligendi consequatur, quos expedita quod
        deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
        minima quibusdam voluptatem? Molestiae placeat tenetur architecto eaque
        dolorum atque excepturi autem, tempora quia illo voluptatibus, minus
        accusamus optio qui!
      </p>
      <Link className="signUp" to="./AccountCreate">
        Sign Up
      </Link>
    </div>
  );
}

export default Home;
