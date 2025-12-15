import dbConnect from "@/db/connect";
import Company from "@/db/models/Company";

export default async function handler(request, response) {
  await dbConnect();
  if (response.method === "GET") {
    const companies = await Company.find();
    response.status(200).json(companies);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
