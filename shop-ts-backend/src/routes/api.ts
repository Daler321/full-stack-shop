import { Router } from 'express';

import { errorHandler } from '../middlewares/errorHandler';

import productsRouter from './products/products.router';
import singupRouter from './singup/singup.router';
import loginRouter from './login/login.router';
import userRouter from './user/user.router';
import orderRouter from './order/order.router';
import commentsRouter from './comments/comments.routerr';
// ________________________________________________________________________________________

const api = Router();

api.use('/products', productsRouter);
api.use('/singup', singupRouter);
api.use('/login', loginRouter);
api.use('/user', userRouter);
api.use('/order', orderRouter);
api.use('/comments', commentsRouter);

api.use(errorHandler);

export default api;
