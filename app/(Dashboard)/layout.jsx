import React from "react";
import Navabar from "../components/Navabar";

const layout = ({ children }) => {
  return (
    <div>
      <Navabar/>
        {children}
      
    </div>
  );
};

export default layout;
