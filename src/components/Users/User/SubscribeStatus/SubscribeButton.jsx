

function SubscribeButton(props) {
  const changeSub = () => {
    props.subscribe(props.userId)
  }

  return (
      <button disabled={props.followingUsers.some( id => id === props.userId)} onClick={ changeSub }>{
        (props.subscribeStatus)? 'Followed' : 'Unfollowed'
      }
      </button>
  )
}

export default SubscribeButton;