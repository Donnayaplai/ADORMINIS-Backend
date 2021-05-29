//version ใหม่
const mariadb = require("mariadb");
const express = require("express");
const app = express();
//const path = require("path");
const cors = require("cors");
const PORT = 3001;

// const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});
const pool = mariadb.createPool({
  host: "adorminis.cp1aphjaifpb.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "adorminis",
  database: "adorminis",
  connectionLimit: 5,
});

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;

  pool.query(
    `INSERT INTO RESIDENT (EMAIL, PASSWORD, FNAME, LNAME) VALUES (?,?,?,?)`,
    [email, password, fname, lname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted"); //send message
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  pool.query(
    `SELECT * FROM RESIDENT WHERE EMAIL = ? AND PASSWORD = ?;`,
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password" });
      }
    }
  );
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// app.use("/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

//Version พี่ไนล์
// const express = require("express");
// const path = require("path");
// const app = express();
// const pool = require("./db");
// //const PORT = 3000;

// app.use(express.static(path.join(__dirname, "public")));

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.listen(port, () => {
//   console.log("app run at pool " + port);
// });
