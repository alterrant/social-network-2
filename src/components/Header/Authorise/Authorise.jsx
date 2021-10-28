import {NavLink} from "react-router-dom";

const Authorise = ({authoriseStatus, authUserProfile, logOut, icoAutorisedUser, icoUnutorisedUser}) => {
  if (authoriseStatus && authUserProfile !== undefined) {

    return (
        <div>
          {
            (authUserProfile.photos.large) ?
                <img src={authUserProfile.photos.large} alt="authIco"/>
                :
                <img src={icoAutorisedUser} alt="authIco"/>
          }
          <button onClick={logOut}>
            {(authoriseStatus) ? 'Logout' : 'LogIn'}
          </button>
        </div>
    )
  } else {
    return (
        <div>
          <img src={icoUnutorisedUser} alt="authIco"/>
          <NavLink to={'/login'}>
            <button>
              {(authoriseStatus) ? 'Logout' : 'LogIn'}
            </button>
          </NavLink>
        </div>
    )
  }
}


export default Authorise;