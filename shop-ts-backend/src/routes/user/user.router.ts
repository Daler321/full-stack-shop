import { Router } from 'express';

import { tryCatch, tryCatchMiddleware } from '../../utils/tyrCatch';
import { authUser } from '../../middlewares/authUser';

import {
  httpGetUserInfo,
  httpAddUserInfo,
  httpUpdateUserInfo,
} from './user.controller';

const userRouter = Router();

userRouter.use(tryCatchMiddleware(authUser));

userRouter.get('/', tryCatch(httpGetUserInfo));

userRouter.post('/', tryCatch(httpAddUserInfo));

userRouter.put('/', tryCatch(httpUpdateUserInfo));

export default userRouter;
