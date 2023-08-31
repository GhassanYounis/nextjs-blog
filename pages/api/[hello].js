import { getSortedPostsData } from "../../lib/posts";

export default async function handler(req, res) {
  const { hello } = req.query;
  res.end(`Post: ${hello}`);
}
