import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please provde a email"],
  },
  password: {
    type: String,
    unique: true,
    required: [true, "Please enter password"],
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill up all fields");
  }
  if (!validator.isEmail(email)) {
    throw Error("Plase porvide valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Please provide strong password");
  }
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email Already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields are required");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Invalid Email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
