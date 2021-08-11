import NavStyle from './Nav.module.css'
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <div className = {NavStyle.nav}>
            <ul className = {NavStyle.ul}>
                <li><NavLink to="/profile" activeClassName={NavStyle.activeLink} className = {`${NavStyle.liText} ${NavStyle.translocation}`}>profile</NavLink></li>
                <li><NavLink to="/message" activeClassName={NavStyle.activeLink} className = {`${NavStyle.liText} ${NavStyle.translocation}`}>message</NavLink></li>
                <li><NavLink to="/news" activeClassName={NavStyle.activeLink} className = {`${NavStyle.liText} ${NavStyle.translocation}`}>news</NavLink></li>
                <li><NavLink to="/music" activeClassName={NavStyle.activeLink} className = {`${NavStyle.liText} ${NavStyle.translocation}`}>music</NavLink></li>
                <br/>
                <li><NavLink to="/settings" activeClassName={NavStyle.activeLink} className = {`${NavStyle.liText} ${NavStyle.translocation}`}>settings</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;