import { Router } from 'express';

import { tryCatch, tryCatchMiddleware } from '../../utils/tyrCatch';
import { authUser } from '../../middlewares/authUser';

import { httpGetAllComentsOfUser, httpAddComment } from './comments.controller';

const commentsRouter = Router();

commentsRouter.use(tryCatchMiddleware(authUser));

commentsRouter.get('/', tryCatch(httpGetAllComentsOfUser));

commentsRouter.post('/', tryCatch(httpAddComment));

export default commentsRouter;
