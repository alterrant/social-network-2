import MainStyle from './Main.module.css'
import PostsContainer from "./Posts/PostsContainer";
import MyAvatarContainer from "./MyAvatar/MyAvatarContainer";

function Main() {
    return (
        <div className={MainStyle.main}>
            <img
                src="https://w-dog.ru/wallpapers/9/16/338082645671935/ssha-gavaji-gavajskie-ostrova-kailua-lanikaj-mokulua-ostrova-lanikaj-plyazh-tixij-okean-more-okean-plyazh-nebo-zima-fevral-ade-xopkins-foto.jpg"
                alt="peach"/>
            <MyAvatarContainer />
            <PostsContainer />
        </div>
    );
}

export default Main;