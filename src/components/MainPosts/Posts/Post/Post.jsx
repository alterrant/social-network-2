import PostStyle from './Post.module.css'

function Post(props) {
    return (
        <div className={`${PostStyle.wrapper} ${PostStyle.text}`}>
            <img src={props.img} alt="myAvatar"/>
          {props.message}
        </div>
    )
}

export default Post;