import mongoose, { Schema } from "mongoose";

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Company =
  mongoose.models.Company || mongoose.model("Company", companySchema);
export default Company;
