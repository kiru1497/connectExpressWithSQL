const db = require('../utils/db-connection'); 
const Courses = require("../models/courses"); 
const Student = require("../models/students"); 
const { where } = require('sequelize');

const addCourse = async (req,res)=> {
    try {
        const {name} = req.body; 
        const course = await Courses.create({'name':name});

        res.json(course); 
    } catch (error) {
        res.status(500).send({'error': error.message});
    }
}

const addStudentsToCourses = async (req,res)=>{
    try {
        const {studentId} = req.body; 

        const student = await Student.findByPk(studentId); 

        const course = await Courses.findAll({
            where:{
                id:courseIds
            }
        })

        await student.addCourse(course); 

        const updatedStudent = await Student.findByPk(studentId,{include:Courses}); 

        res.status(200).json(updatedStudent); 

    } catch (error) {
        
    }
}

module.exports = {
    addCourse,
    addStudentsToCourses
}; 