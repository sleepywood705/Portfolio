require('dotenv').config();  // 환경 변수 로드
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const { MongoClient } = require("mongodb");

let db;
const url = process.env.MONGODB_URI;

new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB가 연결되었습니다.");
    db = client.db("Board");
    app.listen(process.env.PORT || 8080, () => {
      console.log(`서버가 localhost:${process.env.PORT || 8080}에서 열렸습니다.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/Portfolio/community/list", async (요청, 응답) => {
  let result = await db.collection("Post").find().toArray();
  응답.send(result);
});