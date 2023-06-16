const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const { AddTopic,   deleteService, deleteTestimonial,CreateContact } = require("../controllers/topics.episodes");

const router = Router();
   
router.delete("/servicesAll/:id", isAuth, deleteService);
router.delete("/testimonialAll/:id", isAuth, deleteTestimonial);
router.post("/api/topics", isAuth, AddTopic);
router.post("/createContact" ,  CreateContact);

module.exports = router;
