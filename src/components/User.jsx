
function User(props) {
    const { name, handle } = props.tweet.user

    return (
        < span className="user" >
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span >
    )
}

export default User;