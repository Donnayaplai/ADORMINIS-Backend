const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "adorminis.cp1aphjaifpb.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "adorminis",
  database: "adorminis",
  connectionLimit: 5,
});
async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows); //[ {val: 1}, meta: ... ]
    const res = await conn.query("INSERT INTO myTable value (?, ?)", [
      1,
      "mariadb",
    ]);
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) return conn.end();
  }
}
asyncFunction();

module.exports = pool;
