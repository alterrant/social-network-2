import MessageModule from './MainBasic.module.css'
import Message from "./Message/Message";
import Persona from "./Persona/Persona";
import {Route} from "react-router-dom";
import AddMessage from "./AddMessage/AddMessage";

function MainBasic(props) {

    const persons = [
        props.personsData.map( person => <Persona name={person.name} id={person.id} img={person.img}/>)
    ]
    const messages = [
        props.personsData.map( person => {
            return <Route path = {'/message/' + person.name} component = { () => <Message persona={props.messagesData[person.name]}/>}/>
        })
    ]
    const newMessage = [
        props.personsData.map( person => {
            return <Route path = {'/message/' + person.name} component = { () => <AddMessage newMessage={props.newMessage}
                                                                                             textNewMessage={props.textNewMessage}
                                                                                             updateNewTextMessage={props.updateNewTextMessage}/>}/>
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