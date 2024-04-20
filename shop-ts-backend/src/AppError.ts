export class AppError extends Error {
  statusCode: number;
  errorCode: AppErrorCodes;
  constructor(errorCode: number, message: string, statusCode: number) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}

export enum AppErrorCodes {
  NoNededBody = 300,
  NoNededParams = 301,
  NoNededHeaders = 302,
  RegisterFaild = 310,
  LogInFaild = 311,
  AuthFailed = 312,
  WrongEmailOrPassword = 313,
  UserInfoAlreadyExists = 320,
  UserInfoNotExists = 321,
  OrderDoesNotExists = 330,
  NotStckProduct = 331,
  CommentAlreadyExist = 340,
  UserDontOrderProduct = 341,
}
