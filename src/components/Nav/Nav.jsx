import NavStyle from './Nav.module.css'
import Link from "./Links/Link";
import Friends from "./Friends/Friends";

function Nav(prop) {

    const navLinks = [
       prop.sitebar.links.map( linkName => <Link name={linkName}/>)
    ]

    return (
        <div className = {NavStyle.nav}>
            <ul className = {NavStyle.ul}>
                { navLinks }
            </ul>
            <Friends friends={prop.sitebar.friends}/>
        </div>
    );
}

export default Nav;