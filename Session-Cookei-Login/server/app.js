const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./config/database");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const session = require("express-session");

connection.connect((err) => {
  if (err) throw err.message;
  console.log("Connected to mySQl Workbench");
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// -----------------------------------USE SESSION---------------------------------
app.use(
  session({
    key: "userId",
    secret: "minhungg",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// ---------------------------------------------------------------------------

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err.message);
    } else {
      connection.query(
        "INSERT INTO users VALUES(?, ?, ?)",
        [username, hash, "visitor"],
        (err, result) => {
          console.log(err);
        }
      );
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  connection.query(
    "SELECT * FROM users WHERE username = ?",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            req.session.user = result;
            res.send(result);
            req.session.isAuth = true;
            console.log("[post]", req.session.user);
          } else {
            res.send({ message: "Wrong username of password" });
          }
        });
      } else {
        res.send({ message: "Username does't exist" });
      }
    }
  );
});

app.get("/login", (req, res) => {
  console.log("[session]", req.session);
  console.log("[get]", req.session.user);
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`App is running at port ${process.env.PORT}`);
});
