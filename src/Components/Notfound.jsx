import { Link } from "react-router-dom";
import React from "react";
import "../style/notfound.css";

function Notfound() {
  return (
    <div className="contain">
      <div>
        <lottie-player
          src="https://lottie.host/ff513abc-3863-446e-8d6a-c944a3a757df/IzkiYIeyKX.json"
          background="#FFFFFF"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
         
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
      </div>
      <div>
      <h5>Go back to <Link to ="/">Home</Link></h5>
      </div>
    </div>
    
  );
}

export default Notfound;
