import express from "express";
import { MongoClient } from "mongodb";

const app = express();

const MONGO_URL =
  "mongodb+srv://sangeetha:ywr3hRVeiGPWnOtW@cluster0.09bk9ld.mongodb.net/?retryWrites=true&w=majority";
//Mongo connection

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is Connected");
  return client;
}
const client = await createConnection();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/orders", async (req, res) => {
    const result  = await client.db("Ed-Mongo").collection("orders").find().toArray()
    res.send(result);
  });

  
app.listen(8000);
