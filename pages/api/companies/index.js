import dbConnect from "@/db/connect";
import Company from "@/db/models/Company";
import bcrypt from "bcryptjs";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const companies = await Company.find();
    response.status(200).json(companies);
    return;
  }
  if (request.method === "POST") {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      response
        .status(400)
        .json({ message: "name, email and password are required" });
      return;
    }

    const normalizedEmail = email.toLowerCase();

    const existingCompany = await Company.findOne({ email: normalizedEmail });
    if (existingCompany) {
      response.status(409).json({ message: "Email already in use" });
      return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const createdCompany = await Company.create({
      name,
      email: normalizedEmail,
      encryptedPassword,
      createdAt: new Date(),
    });

    response.status(201).json({ id: createdCompany._id });
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
