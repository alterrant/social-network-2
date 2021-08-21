import './MessageBy.css'
import MessageByStyle from './MessageBy.module.css'

function MessageBy(prop) {

    const message__by__person = prop.name;

    return (
        <li className={`${message__by__person} ${MessageByStyle.li}`}>
                <div className={`${MessageByStyle.block} ${message__by__person}`}><p>{prop.messageBy}</p></div>
        </li>
    )
}

export default MessageBy;
