"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const controller_1 = require("./controllers/decorators/controller");
const loginRoutes_1 = require("./routes/loginRoutes");
require("./controllers/LoginController");
const PORT = 5000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["assssjhghjs"] }));
app.use(loginRoutes_1.router);
app.use(controller_1.router);
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
