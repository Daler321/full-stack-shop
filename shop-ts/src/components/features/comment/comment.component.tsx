import React, { FC } from 'react';

import { IComment } from '../../../types/comments.api.interface';

import { StarSolidIcon } from '../../elements/stars/star.solid';
import { StarRegularIcon } from '../../elements/stars/star.regular';

import {
  CommentContainer,
  CommentHeadr,
  CommentWriter,
  CommentData,
  CommentRating,
  CommentText,
} from './comment.styles';

interface ICommentProps {
  comment: IComment;
}

const Comment: FC<ICommentProps> = ({ comment }) => {
  return (
    <CommentContainer>
      <CommentHeadr>
        <CommentWriter>{comment.username}</CommentWriter>
        <CommentData>{comment.date.slice(0, 10)}</CommentData>
      </CommentHeadr>
      <CommentRating>
        {Array(5)
          .fill(1)
          .map((n, i) =>
            i + 1 <= comment.rating ? (
              <StarSolidIcon key={i} />
            ) : (
              <StarRegularIcon key={i} />
            )
          )}
      </CommentRating>
      <CommentText>{comment.body}</CommentText>
    </CommentContainer>
  );
};

export default Comment;
