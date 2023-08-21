import { Link } from "react-router-dom";
import React from "react";
import "../style/notfound.css";

function Notfound() {
  return (
    <div className="contain">
      <div>
        <img src="/images/not1.webp" alt="" className="img-89"/>
      </div>
      <div>
      <h5>Go back to <Link to ="/">Home</Link></h5>
      </div>
    </div>
    
  );
}

export default Notfound;
