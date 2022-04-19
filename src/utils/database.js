import { MongoClient } from "mongodb";

class Database 
{
    /** @type {MongoClient}  */
    static #connection = null;

    static #isConnected = false;

    static get isConnected()
    {
        return this.#isConnected
    }

    static #success(value)
    {
        return { success: true, result: value }
    }

    static #failure()
    {
        return { success: false, result: null }
    }

    /**
     * @returns {Promise<{ success: boolean, result: * }>}
     */
    static async connect()
    {
        if (!this.isConnected)
        {
            try
            {
                let client;
                if (!global._mongoClientPromise) {
                    client = await MongoClient.connect(process.env.MONGODB_URI)
                    global._mongoClientPromise = client.connect();
                }
                else {
                    client = global._mongoClientPromise
                }

                this.#connection = await client;
                this.#isConnected = true;
                return this.#success(this.#connection);
            }
            catch (error)
            {
                this.#connection = null;
                this.#isConnected = false;
                console.error(error);
                return this.#failure()
            }
        }
    }

    /**
     * @param {string} knr
     * @returns {Promise<{ success: boolean, result: * }>}
     */
    static async matchID(knr)
    {
        try 
        {
            if (!knr) return this.#failure();

            let database = this.#connection.db(process.env.MONGODB_DB);
            let collection = database.collection('People');
            let result1 = await collection.findOne({ knr: String(knr) });
            let result2 = await collection.findOne({ proxy: String(knr) });
            return this.#success({ knr: Boolean(result1), proxy: Boolean(result2) }); 
        }
        catch (error) 
        {
            console.error(error)
            return this.#failure();
        }
    }

    /**
     * @param {string} knr 
     * @param {number} type
     * @param {boolean} another
     * @param {?string} proxy
     * @returns {Promise<{ success: boolean, result: * }>}
     */
    static async add(knr, type, another, proxy) 
    {
        try 
        {
            if (!knr) return this.#failure();

            let database = this.#connection.db(process.env.MONGODB_DB);
            let collection = database.collection('People');
            let doc = { knr: String(knr), type: type, another: another }
            if (proxy) {
                doc.proxy = String(proxy);
            }
            let result = await collection.insertOne(doc);
            return this.#success(Boolean(result?.insertedId));
        }
        catch (error) 
        {
            console.error(error)
            return this.#failure();
        }
    }

    /**
     * @returns {Promise<{ success: boolean, result: * }>}
     */
    static async getData()
    {
        try 
        {
            let database = this.#connection.db(process.env.MONGODB_DB);
            let collection = database.collection('People');
            let result = await collection.find({}, { projection: {_id: false }}).toArray();
            return this.#success(result);
        } 
        catch (error) 
        {
            console.error(error)
            return this.#failure();
        }
    }

    /**
     * @returns {Promise<{ success: boolean, result: * }>}
     */
    static async clearData()
    {
        try 
        {
            let database = this.#connection.db(process.env.MONGODB_DB);
            let collection = database.collection('People');
            let result = await collection.deleteMany({})
            return this.#success(result);
        } 
        catch (error) 
        {
            console.error(error)
            return this.#failure();
        }
    }

    static async debug()
    {
        try 
        {
            let database = this.#connection.db(process.env.MONGODB_DB);
            let collection = database.collection('People');
            let result = await collection.aggregate([
                {"$group" : { "_id": "$knr", "count": { "$sum": 1 } } },
                {"$match": { "count" : {"$gt": 1} } }, 
                {"$project": {"knr" : "$_id", "_id" : 0} }
            ]).toArray();
            console.log(JSON.stringify(result));
            return this.#success(result);
        } 
        catch (error) 
        {
            console.error(error)
            return this.#failure();
        }
    }
}

export default Database;