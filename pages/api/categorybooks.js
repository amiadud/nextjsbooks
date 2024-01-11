import { connectToDatabase } from "@/util/mongodb";


export default async function handler(req, res) {

  const { bookCategory } = req.query;

  const { db } = await connectToDatabase();
  const data = await db.collection('books').find({bookCategory}).toArray();
  res.json(data);
}
