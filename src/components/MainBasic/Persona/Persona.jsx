import PersonaModule from "./Persona.module.css";
import {NavLink} from "react-router-dom";
import PersonAva from "./PersonAva/PersonAva";

function Persona(prop) {

    return (
        <li className={`${PersonaModule.name} ${PersonaModule.active} ${PersonaModule.ava}`}>
            <PersonAva img={prop.img}/>
            <NavLink
                to={'/message/' + prop.name}>{prop.name}</NavLink>
        </li>
    )
}

export default Persona;