import {connect} from "react-redux";
import PersonAva from "./PersonAva";

const mapStateToProps = (state, ownProps) => {
    return {
        img: ownProps.img
    }
}

const PersonAvaContainer = connect(mapStateToProps)(PersonAva)

export default PersonAvaContainer;