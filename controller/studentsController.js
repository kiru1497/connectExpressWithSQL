const db = require('../utils/db-connection'); 
const Student = require("../models/students"); 

const addEntries = async (req, res) => {
  try {
    const { email, name } = req.body;

    const student = await Student.create({ email, name });

    res.status(201).json({
      message: "Student created successfully",
      data: student
    });
  } catch (error) {
    console.error("ERROR:", error);   // 👈 THIS LINE
    res.status(500).send("Unable to make an entry");
  }



  // const insertQuery = 'INSERT INTO students (email, name) VALUES (?, ?)';

  // db.execute(insertQuery, [email, name], (err) => {
  //   if (err) return res.status(500).send(err.message);
  //   return res.status(200).send(`Student with name ${name} successfully added`);
  // });
};

const updateEntry = async (req, res) => {

    try {
    const { id } = req.params;
    const { name } = req.body;
    
    const student = await Student.findByPk(id); 
    if(!student){
     return res.status(404).send("User is not found")
    }
    student.name = name; 
    await student.save(); 
    res.status(200).send("User has been updated"); 
    } catch (error) {
      res.status(500).send("User cannot be updated"); 
    }
  



  // const updateQuery = "UPDATE students SET name=? WHERE id=?"; 

  // db.execute(updateQuery, [name, id], (err, result) => {
  //   if (err) return res.status(500).send(err.message);

  //   if (result.affectedRows === 0) {
  //     return res.status(404).send("Student not found");
  //   }

  //   return res.status(200).send("User has been updated"); 
  // });
};

const deleteEntry = async (req, res) => {
  try {
   const { id } = req.params;    
   const student = await Student.destroy({
    where:{
      id:id
    }
   })

   if(!student){
   return res.status(404).send("User not found"); 
   }

   res.status(200).send("User is deleted");
  } catch (error) {
    res.status(500).send("Error encountered while deleting"); 
  }
  
 
  // const deleteQuery = "DELETE FROM students WHERE id=?"; 

  // db.execute(deleteQuery, [id], (err, results) => {
  //   if (err) return res.status(500).send(err.message);

  //   if (results.affectedRows === 0) {
  //     return res.status(404).send("Student is not found"); 
  //   }

  //   return res.status(200).send(`User with ${id} is deleted`); 
  // });
};

module.exports = { addEntries, updateEntry, deleteEntry };
