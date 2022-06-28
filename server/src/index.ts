import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";

const PORT: number = 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["assssjhghjs"] }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
