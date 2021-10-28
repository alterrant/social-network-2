import PersonaModule from "./Persona.module.css";
import {NavLink} from "react-router-dom";
import PersonAvaContainer from "./PersonAva/PersonAvaContainer";

function Persona({img, name}) {

    return (
        <li className={`${PersonaModule.name} ${PersonaModule.active} ${PersonaModule.ava}`}>
            <PersonAvaContainer img={img}/>
            <NavLink
                to={'/message/' + name}>{name}</NavLink>
        </li>
    )
}

export default Persona;