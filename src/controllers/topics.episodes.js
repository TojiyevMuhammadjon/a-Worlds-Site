const { v4: uuid } = require("uuid");
const Io = require("../utils/io");
const Topics = new Io("./database/topics.json");
const Contacts = new Io("./database/contact.json");
const Teachers = new Io("./database/teacher.json");
const topics = require("../models/topics.model");
const contacts = require("../models/contact.model")
const userValidation = require("../validations/auth.validation");
const path = require("path");

const AddTopic = async (req, res) => {
  const { text, name, field } = req.body;
  const { image } = req.files;

  const imageName = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imageName);

  const newTopic = new topics(text, imageName, name, field);

  const teachers = await Topics.read();

  const data = teachers.length ? [...teachers, newTopic] : [newTopic];
  
  await Topics.write(data);
  // res.status(200).json({message: "success"});
  res.redirect("/admin");
};


const deleteService = async (req, res) => {
  const { id } = req.params;
  
  const services = await Teachers.read();
  const deletes = services.find((data) => data.id === id);
  if (!deletes) return res.redirect("/admin");
  
  services.splice(services.indexOf(deletes), 1);
  await Teachers.write(services);
  res.redirect("/services"); 
};
const deleteTestimonial = async (req,res) => {
  const { id } = req.params;
  
  const services = await Topics.read();
  const deletes = services.find((data) => data.id === id);
  if (!deletes) return res.redirect("/admin");
  
  services.splice(services.indexOf(deletes), 1);
  await Topics.write(services);
  res.redirect("/allTestimonial"); 
};
const CreateContact = async (req, res) => {
  const contact = await Contacts.read();
  const { name, number, email, message} = req.body;
  console.log(req.body);
  const newContact = new contacts(name, number, email, message);
  const data = contact.length ? [...contacts,newContact] : [newContact];
  await Contacts.write(data);

  res.redirect("/contact-page")
  
};

module.exports = {
  AddTopic,
  deleteService,
  deleteTestimonial,
  CreateContact
};
