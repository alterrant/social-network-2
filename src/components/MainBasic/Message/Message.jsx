import MessageByContainer from "./MessageBy/MessageByContainer";

function Message(props) {

    const dialog = [
        props.personsMessage.map( message => <MessageByContainer messageBy={message.message} name={message.name}/>)
    ]

    return (
         dialog
    )
}

export default Message;