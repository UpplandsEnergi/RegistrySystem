export default function handler(req, res) {
    const { method, query } = req;
  
    if (method === "GET") {
        return res.status(200).json({})
    }
}
  