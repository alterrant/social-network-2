import MessageModule from './MainBasic.module.css'
import Message from "./Message/Message";
import Persona from "./Persona/Persona";

function MainBasic(props) {

    const persons = [
        props.personsData.map( person => <Persona name={person.name} id={person.id}/>)
    ]
    const messages = [
        props.messagesData.map( message => <Message id={message.id}/>)
    ]

    return (
        <div className={MessageModule.massagesWrapper}>
            <ul>
                { persons }
            </ul>
            <ul>
                { messages }
            </ul>
        </div>
    )
}

export default MainBasic;