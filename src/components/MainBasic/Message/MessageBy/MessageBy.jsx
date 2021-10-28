import './MessageBy.css'
import MessageByStyle from './MessageBy.module.css'

function MessageBy({name, messageBy}) {

    return (
        <li key={name} className={`${name} ${MessageByStyle.li}`}>
                <div className={`${MessageByStyle.block} ${name}`}><p>{messageBy}</p></div>
        </li>
    )
}

export default MessageBy;
