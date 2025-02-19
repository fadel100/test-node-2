// in this module: the sign up controller where i validate the payload , save it to the db and send back a token
import bcrypt from "bcrypt";
import _ from "lodash";
import { User, validateUser } from "../model/userModel";

export const getUser = async (req, res) => {
  // i receive req.user._id because i applied the auth middleware on this route
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
};

export const signUp = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered, Try again");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
};
