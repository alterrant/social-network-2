

function SubscribeButton(props) {
  const changeSub = () => {
    props.subscribe(props.userId)
  }

  return (
      <button onClick={ changeSub }>{
        (props.subscribeStatus)? 'Followed' : 'Unfollowed'
      }
      </button>
  )
}

export default SubscribeButton;