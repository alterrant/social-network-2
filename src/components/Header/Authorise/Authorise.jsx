import {NavLink} from "react-router-dom";

const Authorise = (props) => {
  if (props.authoriseStatus && props.authUserProfile !== undefined) {

    return (
        <div>
          {
            (props.authUserProfile.photos.large) ?
                <img src={props.authUserProfile.photos.large} alt="authIco"/>
                :
                <img src={props.icoAutorisedUser} alt="authIco"/>
          }
          <button onClick={props.logOut}>
            {(props.authoriseStatus) ? 'Logout' : 'LogIn'}
          </button>
        </div>
    )
  } else {
    return (
        <div>
          <img src={props.icoUnutorisedUser} alt="authIco"/>
          <NavLink to={'/login'}>
            <button>
              {(props.authoriseStatus) ? 'Logout' : 'LogIn'}
            </button>
          </NavLink>
        </div>
    )
  }
}


export default Authorise;