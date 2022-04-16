import Database from "../../../utils/database";


export default async function handler(req, res) {

    if (!Database.isConnected)
    {
        let result = await Database.connect();
        if (!result?.result) return res.status(400);
    }
  
    if (req.method === "GET") {
        
        switch (req.query.value)
        {
            case 'isConnected':
                
                return res.status(200).json({ connected: Database.isConnected });

            case 'getData':
                return res.status(200).json(await Database.getData());

            case 'clearData':
                return res.status(200).json(await Database.clearData());

            default:
                return res.status(400);
        }
    }
    else if (req.method === "PUT")
    {
        let body = JSON.parse(req.body)
        switch (req.query.value)
        {
            case 'check':
                return res.status(200).json(await Database.matchID(body.knr, body.checkProxy));

            case 'add':
                return res.status(200).json(await Database.add(body.knr, body.type, body.another, body.proxy));

            default:
                return res.status(400);
        }
    }

    return res.status(400)
}