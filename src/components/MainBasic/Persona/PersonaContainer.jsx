import {connect} from "react-redux";
import Persona from "./Persona";

const mapStateToProps = (state, ownProps) => {
  return {
    name:ownProps.name,
    id: ownProps.id,
    img: ownProps.img
  }
}

const PersonaContainer = connect(mapStateToProps)(Persona);

export default PersonaContainer;