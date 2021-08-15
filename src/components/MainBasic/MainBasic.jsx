import MessageModule from './MainBasic.module.css'
import Message from "./Message/Message";
import Persona from "./Persona/Persona";
import {Route} from "react-router-dom";

function MainBasic(props) {

    const persons = [
        props.personsData.map( person => <Persona name={person.name} id={person.id}/>)
    ]
    const messages = [
        props.personsData.map( person => {
            console.log('/message/' + person.name)

            return <Route path = {'/message/' + person.name} component = { () => <Message persona={props.messagesData[person.name]}/>}/>
        })

        /*<Route path = '/message' component = { () => <MainBasic personsData={props.state.mainPostsPage.personsData} messagesData={props.state.mainPostsPage.messagesData} /> }/>
        props.messagesData.map( message => <Message id={message.id}/>)*/
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