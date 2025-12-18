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
    const companyData = request.body;
    const newCompany = await Company.create(companyData);
    response.status(201).json(newCompany);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
