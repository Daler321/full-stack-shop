"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = require("dotenv");
const redis_1 = require("./servises/redis");
const postgres_1 = require("./servises/postgres");
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 8000;
const server = http_1.default.createServer(app_1.default);
const startServer = async () => {
    (0, dotenv_1.config)();
    await (0, redis_1.redisConnect)();
    await (0, postgres_1.insertMockData)();
    server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};
startServer();
//# sourceMappingURL=index.js.map