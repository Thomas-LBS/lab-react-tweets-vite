function ProfileImage(props) {
    const {image} = props.tweet.user
  
    return (
        <img
        src={image}
        className="profile"
        alt="profile"/>
    )
}

export default ProfileImage;