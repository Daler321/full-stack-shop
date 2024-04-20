export interface IComment {
  body: string;
  rating: number;
  productid: number;
  userid: number;
}

export interface ICommentFormDb extends IComment {
  date: string;
  id: number;
}
