const express = require('express');
const db = require("./utils/db-connection"); 
const studentRoutes = require("./routes/studentsRoutes");
const courseRoutes = require("./routes/courseRoutes"); 

require("./models"); 

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use("/students", studentRoutes);
app.use("/courses",courseRoutes); 

db.sync().then(()=>{
    app.listen(3000, () => console.log('Server is Running'));
}).catch((err)=>{
    console.log(err)
}); 


