import { Schema, model } from "mongoose";

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

const Userchema = model("User", User);
export default Userchema;
