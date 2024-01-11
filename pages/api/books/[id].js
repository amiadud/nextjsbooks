import { connectToDatabase } from "@/util/mongodb";
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const { id } = req.query;

  try {
    const book = await db.collection('books').findOne({ _id: new ObjectId (id) });

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
