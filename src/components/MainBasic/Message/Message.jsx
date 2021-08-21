import MessageBy from "./MessageBy/MessageBy";

function Message(prop) {

    const dialog = [
        prop.persona.map( message => <MessageBy messageBy={message.message} name={message.name}/>)
    ]

    return (
         dialog
    )
}

export default Message;