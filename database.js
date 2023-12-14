import {MongoClient, ObjectId} from 'mongodb';
import debug from 'debug';
const debugDatabase = debug('app:Database');

let _db = null;


async function connect(){
    if(!_db){
        const connectionString = process.env.DB_URL;
        const dbName = process.env.DB_NAME;
        const client = await MongoClient.connect(connectionString);
        _db = client.db(dbName);
    }
    return _db;
}

async function ping(){
    const db = await connect();
    await db.command({ ping: 1 });
    debugDatabase("Pinged your deployment. You successfully connected to MongoDB!");
}

async function getPeople(){
    const db = await connect();
    return db.collection("People").find({}).toArray();
}


//ping();

export {ping,connect, getPeople}