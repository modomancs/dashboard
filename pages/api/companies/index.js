import dbConnect from "@/db/connect";
import Company from "@/db/models/Company";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const companies = await Company.find();
    response.status(200).json(companies);
    return;
  }
  if (request.method === "POST") {
    const { name, email, password } = request.body;

    const existingCompany = await Company.findOne({
      email: email.toLowerCase(),
    });
    if (existingCompany) {
      response.status(409).json({ message: "Email already in use" });
      return;
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const createdCompany = await Company.create({
      name,
      email: email.toLowerCase(),
      encryptedPassword,
      createdAt: new Date(),
    });
    response.status(201).json(createdCompany);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
