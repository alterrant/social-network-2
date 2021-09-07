import PersonaModule from "./Persona.module.css";
import {NavLink} from "react-router-dom";
import PersonAvaContainer from "./PersonAva/PersonAvaContainer";

function Persona(prop) {

    return (
        <li className={`${PersonaModule.name} ${PersonaModule.active} ${PersonaModule.ava}`}>
            <PersonAvaContainer img={prop.img}/>
            <NavLink
                to={'/message/' + prop.name}>{prop.name}</NavLink>
        </li>
    )
}

export default Persona;