export default function handler(req, res) {
    const { method, query } = req;
  
    if (method === "GET") {
        console.log("database", req.body)
        return res.status(200).json({})
    }
}
  