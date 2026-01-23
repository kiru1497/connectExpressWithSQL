const Student = require("./students"); 
const IdentityCard = require("./identityCard"); 
const Department = require("./department"); 
const Courses = require("./courses"); 
const StudentCourses = require("./studentCourses"); 
const studentCourses = require("./studentCourses");

//one to one association 
Student.hasOne(IdentityCard); 
IdentityCard.belongsTo(Student); 


//one to many associations 
Department.hasMany(Student); 
Student.belongsTo(Department); 

//many to many associations 
Student.belongsToMany(Courses,{through:StudentCourses}); 
Courses.belongsToMany(Student,{through:StudentCourses}); 

module.exports = {
    Student,
    IdentityCard, 
    Department,
    Courses,
    studentCourses

}