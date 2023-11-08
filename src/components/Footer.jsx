import React from "react";
import "./Footer.css";

const d = new Date();
let year = d.getFullYear();
function Footer() {
  return (
    <div className="footer">
      <p>Copyright {year} </p>
    </div>
  );
}
export default Footer;
