import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return(
      <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto ">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to=""  exact >Deepak Solutions</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page"  exact to="/" activeClassName="menu_active" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about" activeClassName="menu_active" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/service" activeClassName="menu_active" >Servie</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact" activeClassName="menu_active" >Contact</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
            </div>
        </div>

      </>
  )
}
export default Navbar;