const router = require("express").Router();
const passport = require("passport");
const { sign } = require("jsonwebtoken");

router.get("/auth/linkedin", passport.authenticate("linkedin"));

// Initial passport route calls this route
// controls creation of token for the frontend
// Frontend will need to redirect themselves once they save the token and user
// will need thoroghly checked with the frontend
router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", {
    passReqToCallback: true,
    failureRedirect: "/login",
    session: false,
  }),
  (req: { user: { id: number; username: string } }, res: any) => {
    let user = {
      id: req.user.id,
      username: req.user.username,
    };
    const token = sign(user, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ token, user });
  }
);

module.exports = router;