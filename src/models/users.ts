import { model, models, Schema } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  phone: { type: String, required: true },
});

schema.pre("save", function (next) {
  this.password = this.password;
  next();
});

const Users = models.Users ? models.Users : model("Users", schema);

export default Users;
