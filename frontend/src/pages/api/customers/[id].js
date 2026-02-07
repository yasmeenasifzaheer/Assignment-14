import Customer from "../../../models/Customer";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PATCH") {
    const updated = await Customer.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Customer not found" });
    return res.status(200).json(updated);
  }

  res.setHeader("Allow", ["PATCH"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
