import { Router } from 'express';

import { tryCatch } from '../../utils/tyrCatch';

import {
  httpExit,
  httpLogInUser,
  httpLoginByAuthToken,
} from './login.controller';

const loginRouter = Router();

loginRouter.post('/', tryCatch(httpLogInUser));

loginRouter.get('/', tryCatch(httpLoginByAuthToken));

loginRouter.get('/exit', tryCatch(httpExit));

export default loginRouter;
