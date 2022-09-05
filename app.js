const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//.envファイルの読み込みを可能にする
app.use(express.json());
app.use(express.static("./public"));
//静的なファイルを見にいく、public配下のファイル。

const PORT = 5000;

//ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("サーバーが起動しました。"));
  } catch (err) {
    console.log(err);
  }
};
start();
