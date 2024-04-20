import { IComment, ICommentToAdd } from '../types/comments.api.interface';

export async function getAllCommentsReq(token: string): Promise<IComment[]> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/comments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const comments = await response.json();

  if (Object.hasOwn(comments, 'errorCode')) throw new Error(comments.message);

  return comments;
}

// export async function getOneComment(
//   token: string,
//   productId: number
// ): Promise<IComment[]> {
//   const response = await fetch(`${process.env.REACT_APP_BASE_URL}/comments/getone`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//       itemId: productId.toString(),
//     },
//   });

//   const comment = await response.json();
//   return comment;
// }

export async function addCommentReq(
  token: string,
  comment: ICommentToAdd
): Promise<IComment> {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(comment),
  });

  const commentRes = await response.json();

  if (Object.hasOwn(commentRes, 'errorCode'))
    throw new Error(commentRes.message);

  return commentRes;
}
