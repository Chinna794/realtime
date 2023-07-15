import "../Styles/Root.css"
function Root() {
    return ( 
    <div className="parent-div">
      <div id="profile-div" className="child-div">
         <img src ="https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds"/>
      </div>
      <div id="api-div" className="child-div">
        <h4>api data</h4>
      </div>
      <div id="hover-div" className="child-div">
          <h4>hover on image</h4>
      </div>
      <div id="video-div" className="child-div">
        <h4>play video</h4>
      </div>
      <div id="routing-div" className="child-div">
        <h4>mammals</h4>
      </div>
    </div>
     );
}

export default Root;