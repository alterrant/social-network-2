import MessageBy from "./MessageBy/MessageBy";

function Message(prop) {

    const dialog = [
        prop.persona.map( message => <MessageBy messageBy={message.message}/>)
    ]

    return (
         dialog
    )
}

export default Message;