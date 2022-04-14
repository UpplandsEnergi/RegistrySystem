import Database from "../../../utils/database";


export default async function handler(req, res) {

    const { method, query } = req;
    console.log("database/[x]", method, query )
  
    if (method === "GET") {
        
        switch (query.value)
        {
            case 'isConnected':
                if (!Database.isConnected) await Database.connect()
                return res.status(200).json({ connected: Database.isConnected })

            case 'debug':
                return res.status(400).json({ result: process.env })

            default:
                return res.status(400)
        }
    }

    if (method === "PUT")
    {
        let body = JSON.parse(req.body)
        console.log("[x]:", body)
        switch (query.value)
        {
            case 'check':
                var match = await Database.matchID(body.knr)
                return res.status(200).json(match)

            case 'add':
                var result = await Database.add(body.knr, body.value)
                return res.status(200).json(result)

            default:
                return res.status(400)
        }
    }

    return res.status(400)
}