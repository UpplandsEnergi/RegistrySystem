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

    static async connect()
    {
        if (!this.isConnected)
        {
            try
            {
                this.#connection = await MongoClient.connect(process.env.MONGODB_URI)
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

    static async matchID(knr)
    {
        try 
        {
            if (!knr || (!this.isConnected && !await this.connect())) return this.#failure();

            let database = this.#connection.db(process.env.MONGODB_DB);
            let collection = database.collection('People');
            let result = await collection.findOne({ knr: String(knr) });
            return this.#success(Boolean(result)); 
        }
        catch (error) 
        {
            console.error(error)
            return this.#failure();
        }
    }

    static async add(knr, value) 
    {
        try 
        {
            if (!knr || (!this.isConnected && !await this.connect())) return null;

            let database = this.#connection.db(process.env.MONGODB_DB);
            let collection = database.collection('People');
            let result = await collection.insertOne({ knr: String(knr), value: value });
            return this.#success(Boolean(result?.insertedId));
        }
        catch (error) 
        {
            console.error(error)
            return this.#failure();
        }
    }
}

export default Database;