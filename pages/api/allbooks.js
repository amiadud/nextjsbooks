import { connectToDatabase } from "@/util/mongodb";


export default async function handler(req, res) {

  const { db } = await connectToDatabase();
  const data = await db.collection('books').find().toArray();
  res.json(data);
}
