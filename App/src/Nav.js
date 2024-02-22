import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'; 
const Nav = () => {
  const location = useLocation(); 
  const [resNav, activateResVane] = useState(false);

  
  const handleNav = () => {
    activateResVane(!resNav) ;
 }

  return (  
    <div className="nav">
      <div className="navC">
        <div className="titre">
          <Link to="/"> <img id="Logo" src="./logo.png" alt="Description of the image" /> 
</Link>
        </div>
        
         <div className="lien">
          <ul className="lienLarge" id={resNav === true ? "resTon":"resToff"}>
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Accueil</Link></li>
          <li className={location.pathname === '/products' ? 'active' : ''}><Link to="/products">Produit</Link></li>
          <li><a href="mailto:beautyplex00@gmail.com">Contact</a></li>
          </ul>
          <button className="res-nav" onClick={handleNav}>
          <img
            id="res-nav"
            src="./res-nav.png"
            alt="Description of the image"
          /></button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Nav;
