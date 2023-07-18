import "../Styles/Root.css"
import Manatee from "./Manatee/Manatee";
import Narwhal from "./Narwhal/Narwhal";
import Whale from "./Whale/Whale";
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import React from "react";
import { useState } from "react";
import axios from "axios";


function Root() {
  const [joke, setJoke] = useState("")

  const getJoke = () =>{
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response)=>{
      console.log(response)
      setJoke(response.data.setup + "..." + response.data.punchline);
    })
  }
    return ( 
    <div className="parent-div">
      <div id="profile-div" className="child-div">
         <img src ="https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds" alt="Logo"/>
      </div>
      <div id="api-div" className="child-div">
        <button onClick={getJoke}>CallApi</button>
        {joke}
      </div>
      <div id="hover-div" className="child-div">
        <img src ="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1689271964.webp" alt="" className="image-hover"/>
      </div>
      <div id="video" className="child-div">
        <h4>play video</h4>
      </div>
      <div id="routing-div" className="child-div">
        <h5>mammals</h5>
        <BrowserRouter>
        <nav>
        <ul>
          <div className="ul-container">
            <div className="li">
          <li className="li-mammals"><Link to="/manatee">Manatee </Link></li>
          </div>
          <div className="li">
          <li className="li-mammals"><Link to="/narwhal">Narwhal </Link></li>
          </div>
          <div className="li">
          <li className="li-mammals"><Link to="/whale">Whale </Link></li>
          </div>
          </div>
        </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element = {<Manatee/>}>Manatee</Route>
          <Route path="/narwhal" element = {<Narwhal/>}>Narwhal</Route>
          <Route path="/whale" element = {<Whale/>}>Whale</Route>
        </Routes>
        </BrowserRouter>
        
      </div>
      </div>
     );
}

export default Root;