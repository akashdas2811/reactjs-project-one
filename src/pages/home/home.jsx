import React from "react";
import { Link } from "react-router-dom";
import BackImage from "./images/backimgae.jpg";
function Home()
{
    return(
        <div style={{backgroundImage: `url(${BackImage})`,height:"100vh"}}>
        <h1>This is home page !!!</h1>
        <ul>
            <li><Link to="/login">Goto Login</Link></li>
            <li><Link to="/signup">Goto Signup</Link></li>
        </ul>
        </div>
    )
}
export default Home