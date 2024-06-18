import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  Bookname: {
    type: String,
    required:true,
  },
  Author: {
    type: String,
    required:true,
  },
  Description: {
    type: String,
  }
});

export default mongoose.model("Books", booksSchema);