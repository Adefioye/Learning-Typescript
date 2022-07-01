"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        next();
        return;
    }
    res.status(403).send("You are not allowed");
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    if (req.session && req.session.isLoggedIn) {
        res.send(`
      <div>
        <h1>You are logged in</h1>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
    <div>
      <h1>You are logged out</h1>
      <a href="/login">Login</a>
    </div>
  `);
    }
});
// router.get("/login", (req: Request, res: Response) => {
//   res.send(`
//           <form method="POST">
//             <div>
//                 <label>Email</label>
//                 <input name="email" />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input name="password" type="password">
//             </div>
//             <button>Submit</button>
//           </form>
//       `);
// });
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    // console.log(`Email: ${email}, Password: ${password}`);
    if (email && password && email === "koko@gmail.com" && password === "koko") {
        req.session = { isLoggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Please provide a valid email");
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome to the protected route");
});
