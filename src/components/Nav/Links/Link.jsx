import {NavLink} from "react-router-dom";
import LinkStyle from './Link.module.css'

function Link(props) {
  return (
      <li key={props.name}>
        <NavLink to={`/` + props.name}
                 activeClassName={LinkStyle.activeLink}
                 className={`${LinkStyle.liText} ${LinkStyle.translocation}`}>
          {props.name}
        </NavLink>
      </li>
  );
}

export default Link;