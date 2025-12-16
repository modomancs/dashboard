import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;
