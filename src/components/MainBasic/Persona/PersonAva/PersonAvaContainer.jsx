import {connect} from "react-redux";
import PersonAva from "./PersonAva";

const mapStateToProps = (state, ownProps) => {
    return {
        img: ownProps.img
    }
}

export default connect(mapStateToProps)(PersonAva)