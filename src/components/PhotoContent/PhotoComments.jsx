import React from 'react';
import { UserContext } from './../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

function PhotoComments(props) {
  const [comments, SetComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>
              {comment.comment_author} : <span>{comment.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} SetComments={SetComments} />}
    </>
  );
}

export default PhotoComments;
