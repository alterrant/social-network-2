import PersonaModule from "./Persona.module.css";
import {NavLink} from "react-router-dom";

function Persona(prop) {

    return (
        <li className={`${PersonaModule.name} ${PersonaModule.active}`}><NavLink
            to={'/message/' + prop.name}>{prop.name}</NavLink></li>
    )
}

export default Persona;