const {Sequelize} = require("sequelize"); 

const sequelize = new Sequelize('testDB','root','Edu@Games1973',{
  host:'localhost',
  dialect:'mysql'
}) ;


(async () => {try {
  sequelize.authenticate();
  console.log("Connection to the database has been created"); 
} catch (error) {
  console.log(error); 
}})();

module.exports = sequelize; 









// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Edu@Games1973",
//   database: "testDB"
// });

// connection.connect((err) => {
//   if (err) {
//     console.log("DB connection failed:", err);
//     return;
//   }

//   console.log("DB Connected");

//   const creationQuery = `
//     CREATE TABLE IF NOT EXISTS students (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       name VARCHAR(255),
//       email VARCHAR(255)
//     );
//   `;

//   connection.execute(creationQuery, (err) => {
//     if (err) {
//       console.log("Table creation failed:", err);
//       return;
//     }

//     console.log("Students table is ready");
//   });
// });

// module.exports = connection;
