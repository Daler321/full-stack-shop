import React, { ChangeEvent, FC, useState } from 'react';

import { IComment } from '../../../types/comments.api.interface';

import Comment from '../comment/comment.component';
import { StarSolidIcon } from '../../elements/stars/star.solid';
import { StarRegularIcon } from '../../elements/stars/star.regular';
import CustomButton from '../../elements/custom-button/custom-button.component';

import {
  WriteCommentConstiner,
  WriteCommentHeader,
  WriteRatingContainer,
  WriteRatinElement,
  WriteCommentText,
  WriteCommentButtonContainer,
} from './order-details-comment.styles';

interface IOrderDetailsCommentProps {
  comment: IComment | null;
  addComment: (body: string, rating: number) => void;
}

const OrderDetailsComment: FC<IOrderDetailsCommentProps> = ({
  comment,
  addComment,
}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const randomNum = Math.random();

  const setRatingHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const writeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const addCommentHandler = () => {
    if (!rating) return;
    addComment(review, rating);
  };

  if (!comment)
    return (
      <WriteCommentConstiner>
        <WriteCommentHeader>Write Review</WriteCommentHeader>
        <WriteRatingContainer>
          {Array(5)
            .fill(1)
            .map((v, i) => (
              <div key={i}>
                <label htmlFor={`star${i + 1 + randomNum}`}>
                  {i + 1 <= rating ? <StarSolidIcon /> : <StarRegularIcon />}
                </label>
                <WriteRatinElement
                  type={'checkbox'}
                  value={i + 1}
                  onChange={setRatingHandler}
                  id={`star${i + 1 + randomNum}`}
                />
              </div>
            ))}
        </WriteRatingContainer>
        <WriteCommentText value={review} onChange={writeTextHandler} />
        <WriteCommentButtonContainer>
          <CustomButton onClick={addCommentHandler}>Add Review</CustomButton>
        </WriteCommentButtonContainer>
      </WriteCommentConstiner>
    );

  return <Comment comment={comment} />;
};

export default OrderDetailsComment;
