import AvatarStyle from './MyAvatar.module.css'

function Avatar(props) {
    return (
        <div className={AvatarStyle.wrapper}>
            <img src={props.myDescription.myDescription.img} alt="myAvatar"/>
            <p>{props.myDescription.myDescription.description}</p>
        </div>
    )
}

export default Avatar;