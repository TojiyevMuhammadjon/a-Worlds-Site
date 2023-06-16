const {v4: uuid} = require("uuid");
const Io = require("../utils/io");
const Teachers = new Io("./database/teacher.json");
const Services = require("../models/Teacher");
const userValidation = require("../validations/auth.validation")
const path = require("path");

const create = async (req, res) => {
  const {text} = req.body;
  const {image} = req.files;
  
  const imageName = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imageName);

  const newTeacher = new Services(text, imageName);

  const teachers = await Teachers.read();

  const data = teachers.length ? [...teachers, newTeacher] : [newTeacher];

  await Teachers.write(data);
  // res.status(200).json({message: "success"});
  res.redirect("/admin");
};
const getTeacher = async (req, res) => {
  res.render("teacher")
};

const deleteTeacher = async (req, res) =>{
  res.render("delete");
}

const TEACHERd = async (req, res) =>{
  const {id} = req.body;

  const teachers = await Teachers.read();
  const deletes = teachers.find((data) => data.id === id);
  if(!deletes) return res.redirect("/delete/teacher");

  teachers.splice(teachers.indexOf(deletes), 1);
  await Teachers.write(teachers);
  res.redirect("/admin");

}
module.exports = {
  create,
  getTeacher,
  deleteTeacher,
  TEACHERd
};
