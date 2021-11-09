import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


export default function NavAdmin() {


  return (
    <nav id="nav_admin" className="nav row">
      <FontAwesomeIcon icon={faCog} />
      &nbsp;
      <NavLink className="link" activeClassName="is-active" to="/admin/artists">
        artists
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/admin/albums">
        albums
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/admin/labels">
        labels
      </NavLink>
      <NavLink className="link" activeClassName="is-active" to="/admin/styles">
        styles
      </NavLink>
    </nav>
  );
}
