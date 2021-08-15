import MessageModule from "../../MainBasic.module.css";

function MessageBy(prop) {
    return (
        <li className={MessageModule.message}>{prop.messageBy}</li>
    )
}

export default MessageBy;
