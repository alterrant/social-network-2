function SubscribeButton(props) {
  const changeSub = () => {
    props.changeSubscribe(props.userId)
  }

  return (
      <button onClick={ changeSub }>{
        (props.subscribeStatus)? 'Follow' : 'Unfollow'
      }
      </button>
  )
}

export default SubscribeButton;