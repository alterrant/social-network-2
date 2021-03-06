import NavStyle from './Nav.module.css'
import LinkContainer from "./Links/LinkContainer";
import FriendsContainer from "./Friends/FriendsContainer";

function Nav(prop) {
    const navLinks = [
       prop.links.map( linkName =>  <LinkContainer key={linkName} name={linkName}/>)
    ]
    return (
        <div className = {NavStyle.nav}>
            <ul key={1} className = {NavStyle.ul}>
                { navLinks }
            </ul>
            <FriendsContainer friends={prop.friends}/>
        </div>
    );
}

export default Nav;