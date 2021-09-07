import Link from "./Link";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        name: ownProps.name
    }
}

const LinkContainer = connect(mapStateToProps)(Link);

export default LinkContainer;