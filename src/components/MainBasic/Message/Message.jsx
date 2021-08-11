import MessageModule from "../MainBasic.module.css";

function Message(prop) {
    return (
        <li className={MessageModule.message}>{`message` + prop.id}</li>
    )
}

export default Message;