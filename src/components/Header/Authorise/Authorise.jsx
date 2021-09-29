const Authorise = (props) => {
  if (props.authoriseStatus && props.authUserProfile !== undefined) {
  return (
      <div>
        { (props.authUserProfile.photos.large) ? <img src={props.authUserProfile.photos.large} alt="authIco"/> :
                  <img src={props.icoAutorisedUser} alt="authIco"/>}
        <button>
          {(props.authoriseStatus) ? 'authTrue' : 'authFalse'}
        </button>
      </div>
  )
  } else {
    return (
            <div>
              <img src={props.icoUnutorisedUser} alt="authIco"/>
              <button>
                {(props.authoriseStatus) ? 'authTrue' : 'authFalse'}
              </button>
            </div>
        )
  }
}

export default Authorise;