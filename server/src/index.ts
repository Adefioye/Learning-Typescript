import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router as controllerRouter } from "./controllers/decorators/controller";

import { router } from "./routes/loginRoutes";
import "./controllers/LoginController";

const PORT: number = 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["assssjhghjs"] }));
app.use(router);
app.use(controllerRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
