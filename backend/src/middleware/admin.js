// i add this middleware to the routes which should be accessed by an admin only
export function admin(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("access denied");
  next();
}
