import {connect} from "react-redux";
import MyAvatar from "./MyAvatar";

const mapStateToProps = (store) => {
  return {
    img: store.mainBasicPage.myDescription.img,
    description: store.mainBasicPage.myDescription.description
  }
}

const MyAvatarContainer = connect(mapStateToProps)(MyAvatar);

export default MyAvatarContainer;