"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMockData = exports.db = void 0;
const knex_1 = __importDefault(require("knex"));
const products_json_1 = __importDefault(require("../mock-data/products.json"));
const comments_json_1 = __importDefault(require("../mock-data/comments.json"));
const categories_json_1 = __importDefault(require("../mock-data/categories.json"));
exports.db = (0, knex_1.default)({
    client: 'pg',
    connection: process.env.POSTGRES_URI,
});
const insertMockData = async () => {
    await (0, exports.db)('products').insert(products_json_1.default);
    await (0, exports.db)('comments').insert(comments_json_1.default);
    await (0, exports.db)('categories').insert(categories_json_1.default);
};
exports.insertMockData = insertMockData;
//# sourceMappingURL=postgres.js.map