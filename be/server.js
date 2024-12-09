<<<<<<< HEAD
const express = require('express')
const app = express()

app.listen(8080, () => {
  console.log('http://localhost:8080에서 서버 실행중')
})

app.get('/', (요청, 응답) => {
  응답.send('반갑소')
})

app.get('/news', (요청, 응답) => {
  응답.send('오늘 비 옴')
})
=======
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

const { MongoClient } = require("mongodb");

let db;
const url = process.env.MONGODB_URL;

new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("데이터베이스가 MongoDB에 연결되었습니다.");
    db = client.db("Board");
    app.listen(process.env.PORT || 8080, () => {
      console.log(`서버가 localhost:${process.env.PORT || 8080}에 연결되었습니다.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


app.post('/glereka/posting', async (요청, 응답) => {
  await db.collection('Post').insertOne(요청.body)
  console.log(요청.body)
});
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
