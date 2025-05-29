import React from 'react';
import { UserContext } from './../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

function PhotoComments(props) {
  const [comments, SetComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
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
