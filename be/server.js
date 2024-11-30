<<<<<<< HEAD
const express = require("express");
const app = express();
const methodOverride = require('method-override')


app.use(methodOverride('_method'))
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(passport.initialize())
app.use(session({
  secret: '암호화에 쓸 비번',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.session())


const { MongoClient, ObjectId } = require("mongodb");

let db;
const url = "mongodb+srv://sleepywood705:alduf1288@cluster0.qtq8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("데이터베이스가 MongoDB에 연결되었습니다.");
    db = client.db("test");
    app.listen(8080, () => {
      console.log("서버가 http://localhost:8080에 연결되었습니다.");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (요청, 응답) => {
  응답.send("반갑소");
});

app.get("/list", async (요청, 응답) => {
  let result = await db.collection("post").find().toArray();
  console.log(result[0].title);
  응답.render("list.ejs", { 글목록: result });
});

app.get("/write", (요청, 응답) => {
  응답.render("write.ejs");
});

app.get("/time", async (요청, 응답) => {
  let result = await db.collection("post").find().toArray();
  console.log(result[0].title);
  응답.render("time.ejs", { data: new Date() });
});

app.post("/add", async (요청, 응답) => {
  console.log(요청.body);
  try {
    if (요청.body.title == "") {
      응답.send("제목 입력 안 했음");
    } else {
      await db
        .collection("post")
        .insertOne({ title: 요청.body.title, content: 요청.body.content });
      응답.redirect("/list");
    }
  } catch (err) {
    console.log(err);
    응답.status(500).send("서버 에러");
  }
});

app.get("/detail/:id", async (요청, 응답) => {
  try {
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.params.id) });
    console.log(요청.params);
    if (result == null) {
      응답.status(404).send("이상한 url 입력함");
    }
    응답.render("detail.ejs", { result: result });
  } catch (err) {
    console.log(err);
    응답.status(404).send("이상한 url 입력함");
  }
});

app.get("/edit/:id", async (요청, 응답) => {
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(요청.params.id) });
  console.log(result);
  응답.render("edit.ejs", { result: result });
});

app.put("/edit", async (요청, 응답) => {
  await db
    .collection('post')
    .updateOne(
      { _id: new ObjectId(요청.body.id) },
      { $set: { title: 요청.body.title, content: 요청.body.content } }
    )
  응답.redirect('/list');
});

app.delete('/delete', async (요청, 응답) => {
  console.log(요청.query)
  await db.collection('post')
    .deleteOne({ _id: new ObjectId(요청.query.docid) })
  응답.send('삭제완료')
})

app.get("/list/:id", async (요청, 응답) => {
  let result = await db.collection("post")
    .find()
    .skip((요청.params.id - 1) * 5)
    .limit(5)
    .toArray();
  console.log(result[0].title);
  응답.render("list.ejs", { 글목록: result });
});

app.get("/list/next/:id", async (요청, 응답) => {
  let result = await db.collection("post")
    .find({ _id: { $gt: new ObjectId(요청.params.id) } })
    .limit(5)
    .toArray();
  console.log(result[0].title);
  응답.render("list.ejs", { 글목록: result });
});

passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
  let result = await db
    .collection('user')
    .findOne({ username: 입력한아이디 })
  if (!result) {
    return cb(null, false, { message: '아이디 DB에 없음' })
  }
  if (result.password == 입력한비번) {
    return cb(null, result)
  } else {
    return cb(null, false, { message: '비번불일치' });
  }
}))

app.get("/login", async (요청, 응답) => {

  응답.render("login.ejs");
});

app.post("/login", async (요청, 응답, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) return 응답.status(500).json(error)
    if (!user) return 응답.status(401).json(info.message)
    요청.login(user, () => {
      if (err) return next(err)
      응답.redirect('/')
    })
  })(요청, 응답, next)
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
const url = process.env.MONGODB_URI;

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
>>>>>>> 24cd4ca86abd7011f9e8e0b344264e7e636f7b09
});