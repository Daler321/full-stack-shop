import { Router } from 'express';

import { tryCatch } from '../../utils/tyrCatch';

import { httpRegisterUser } from './singup.controller';

const singupRouter = Router();

singupRouter.post('/', tryCatch(httpRegisterUser));

export default singupRouter;
