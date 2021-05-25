//version ใหม่
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();
const pool = require("./db");
const utilityRouter = require("./routes/Utility");
const roomRouter = require("./routes/Room");
app.use("/utility", utilityRouter);
app.use("/room", roomRouter);

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// // All other GET requests not handled before will return our React app
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
