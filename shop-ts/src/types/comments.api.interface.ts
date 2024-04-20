export interface IComment {
  id: number;
  date: string;
  body: string;
  rating: number;
  productid: number;
  userid: number;
  username: string;
}

export interface ICommentToAdd {
  body: string;
  rating: number;
  productid: number;
  userid: number;
}
