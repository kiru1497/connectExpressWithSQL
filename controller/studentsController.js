const db = require('../utils/db-connection'); 

const addEntries = (req, res) => {
  const { email, name } = req.body;

  const insertQuery = 'INSERT INTO students (email, name) VALUES (?, ?)';

  db.execute(insertQuery, [email, name], (err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send(`Student with name ${name} successfully added`);
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updateQuery = "UPDATE students SET name=? WHERE id=?"; 

  db.execute(updateQuery, [name, id], (err, result) => {
    if (err) return res.status(500).send(err.message);

    if (result.affectedRows === 0) {
      return res.status(404).send("Student not found");
    }

    return res.status(200).send("User has been updated"); 
  });
};

const deleteEntry = (req, res) => {
  const { id } = req.params; 
  const deleteQuery = "DELETE FROM students WHERE id=?"; 

  db.execute(deleteQuery, [id], (err, results) => {
    if (err) return res.status(500).send(err.message);

    if (results.affectedRows === 0) {
      return res.status(404).send("Student is not found"); 
    }

    return res.status(200).send(`User with ${id} is deleted`); 
  });
};

module.exports = { addEntries, updateEntry, deleteEntry };
