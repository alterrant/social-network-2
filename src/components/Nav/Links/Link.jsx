import {NavLink} from "react-router-dom";
import LinkStyle from './Link.module.css'

function Link(prop) {
  return (
      <li>
        <NavLink to={`/` + prop.name}
                 activeClassName={LinkStyle.activeLink}
                 className={`${LinkStyle.liText} ${LinkStyle.translocation}`}>
          {prop.name}
        </NavLink>
      </li>
  );
}

export default Link;