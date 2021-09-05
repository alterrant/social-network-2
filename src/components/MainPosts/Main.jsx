import MainStyle from './Main.module.css'
import Avatar from "./MyAvatar/MyAvatar";
import Posts from "./Posts/Posts";

function Main(props) {
    return (
        <div className={MainStyle.main}>
            <img
                src="https://w-dog.ru/wallpapers/9/16/338082645671935/ssha-gavaji-gavajskie-ostrova-kailua-lanikaj-mokulua-ostrova-lanikaj-plyazh-tixij-okean-more-okean-plyazh-nebo-zima-fevral-ade-xopkins-foto.jpg"
                alt="peach"/>
            <Avatar myDescription={props.myPostsData}/>
            <Posts myPosts={props.myPostsData} store={props.store}/>
        </div>
    );
}

export default Main;