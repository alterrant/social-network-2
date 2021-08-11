import PostStyle from './Post.module.css'

function Post(props) {
    return (
        <div className={PostStyle.text}>
            {props.name}
            {props.say}
        </div>
    )
}

export default Post;