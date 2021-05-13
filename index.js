//version ใหม่
const express = require("express");
const app = express();
//const path = require("path");
const cors = require("cors");
const mariadb = require("mariadb");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = mariadb.createPool({
  host: "adorminis.cp1aphjaifpb.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "adorminis",
  database: "adorminis",
  connectionLimit: 5,
});
app.post("/register", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;

  pool.query(
    "INSERT INTO RESIDENT (EMAIL, PASSWORD, FNAME, LNAME) VALUES (?,?,?,?)",
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

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
