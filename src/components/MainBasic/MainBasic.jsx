import MessageModule from './MainBasic.module.css'
import {Route} from "react-router-dom";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import MessageContainer from "./Message/MessageContainer";
import PersonaContainer from "./Persona/PersonaContainer";

function MainBasic({personsData}) {

    const persons = [
        personsData.map( person => <PersonaContainer name={person.name} id={person.id} img={person.img}/>)
    ]
    const messages = [
        personsData.map( person => {
            return <Route path = {'/message/' + person.name} component = { () => <MessageContainer persona={person.name}/>}/>
        })
    ]

    const newMessage = [
        personsData.map( person => {
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
            { newMessage }
        </div>
    )
}

export default MainBasic;