import MessageModule from './MainBasic.module.css'
import {Route} from "react-router-dom";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import MessageContainer from "./Message/MessageContainer";
import PersonaContainer from "./Persona/PersonaContainer";

function MainBasic(props) {

    const persons = [
        props.personsData.map( person => <PersonaContainer name={person.name} id={person.id} img={person.img}/>)
    ]
    const messages = [
        props.personsData.map( person => {
            return <Route path = {'/message/' + person.name} component = { () => <MessageContainer persona={person.name}/>}/>
            //<Message persona={props.messagesData[person.name]}/>
        })
    ]

    const newMessage = [
        props.personsData.map( person => {
            return <Route path = {'/message/' + person.name} component = { () => <AddMessageContainer person={person.name}/>}/>
        })
    ]

    return (
        <div className={MessageModule.massagesWrapper}>
            <ul>
                { persons }
            </ul>
            <ul>
                { messages }
            </ul>
            {/*Можно сделать крассивее ввод newMessage, но тогда нужно разбивть по-другому компоненты*/}
            { newMessage }
        </div>
    )
}

export default MainBasic;