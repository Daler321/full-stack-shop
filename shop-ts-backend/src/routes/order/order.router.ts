import { Router } from 'express';

import { tryCatch, tryCatchMiddleware } from '../../utils/tyrCatch';
import { authUser } from '../../middlewares/authUser';

import { httpGetOrders, httpMakeOrder } from './order.controller';

const orderRouter = Router();

orderRouter.use(tryCatchMiddleware(authUser));

orderRouter.post('/', tryCatch(httpMakeOrder));

orderRouter.get('/', tryCatch(httpGetOrders));

export default orderRouter;
