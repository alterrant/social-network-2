import MainStyle from './Main.module.css'
import PostsContainer from "./Posts/PostsContainer";
import MyAvatarContainer from "./MyAvatar/MyAvatarContainer";
import {Route, Switch} from "react-router-dom";
import UserIdProfileContainer from "./UserIdProfile/UserIdProfileContainer";

function Main(props) {
  debugger
  return (
      <div className={MainStyle.main}>
        <img
            src="https://w-dog.ru/wallpapers/9/16/338082645671935/ssha-gavaji-gavajskie-ostrova-kailua-lanikaj-mokulua-ostrova-lanikaj-plyazh-tixij-okean-more-okean-plyazh-nebo-zima-fevral-ade-xopkins-foto.jpg"
            alt="peach"/>
        <Switch>
          <Route path={'/profile/' + props.match.params.userId}>
            <UserIdProfileContainer userId={props.match.params.userId}/>
          </Route>
          <Route path={'/profile'}>
            <MyAvatarContainer/>
          </Route>
        </Switch>
        <PostsContainer/>
      </div>
  );
}

export default Main;