import AvatarStyle from './MyAvatar.module.css'

function MyAvatar(props) {
    return (
        <div className={AvatarStyle.wrapper}>
            <img src={props.img} alt="myAvatar"/>
            <p>{props.description}</p>
        </div>
    )
}

export default MyAvatar;