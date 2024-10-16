import mongoose, { Schema } from "mongoose";
import { IMenu } from "snapmeal-common";

const menuSchema: Schema<IMenu> = new Schema({
  canteenId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  timeUnit:{
    type: String,
    enum: ["minutes", "hours"],
    required: true
  },
  time:{
    type: Number,
    required: true
  }
});
export const Menu = mongoose.model("menu", menuSchema);
