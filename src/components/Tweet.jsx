import User from './User.jsx';
import Timestamp from './Timestamp.jsx';
import ProfileImage from './ProfileImage.jsx';
import Message from './Message.jsx';
import Actions from './Actions.jsx';


function Tweet(props) {
 
  return (
    <div className="tweet">
      <ProfileImage tweet={props.tweet} />


      <div className="body">
        <div className="top">
          <User tweet={props.tweet} />
          <Timestamp tweet={props.tweet} />
        </div>

        <Message tweet={props.tweet} />
        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>

  );
}

export default Tweet;
