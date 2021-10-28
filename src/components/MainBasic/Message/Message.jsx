import MessageByContainer from "./MessageBy/MessageByContainer";

function Message({personsMessage}) {

    const dialog = [
        personsMessage.map( message => <MessageByContainer messageBy={message.message} name={message.name}/>)
    ]

    return (
         dialog
    )
}

export default Message;