const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KanbanTypes = new Schema(
  {
    label: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("kanbantypes", KanbanTypes);
