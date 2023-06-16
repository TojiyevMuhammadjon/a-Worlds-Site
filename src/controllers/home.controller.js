const Io = require("../utils/io");
const Teachers = new Io("./database/teacher.json");
const Topics = new Io("./database/topics.json");
const Contacts = new Io("./database/contact.json");

const home = async (req, res) => {
  const teachers = await Teachers.read();
  const topics = await Topics.read();

  res.render("index", {
    teachers,
    topics,
  });
};

const detailPage = async (req, res) => {
  res.render("detail-page");
};

const listingPage = async (req, res) => {
  res.render("listing-page");
};

const adminPage = async (req, res) => {
  res.render("admin");
};

const aboutTopic = async (req, res) => {
  res.render("about");
};
const blogPage = async (req, res) => {
  res.render("blog");
};
const servicesPage = async (req, res) => {
  res.render("services");
};
const contactUs = async (req, res) => {
  res.render("contact");
};

const Testimonial = async (req, res) => {
  const testimonials = await Topics.read();
  
  res.render("allTestimonial", { testimonials });
  
};

const Message = async (req, res) => {
res.render("ContactUs")
}

const ToPics = async (req, res) => {
  const topics = await Teachers.read();

  res.render("allServices", { topics });
};

const Testimonials = async (req, res) => {
};
const Contact  = async (req, res) => {
const contacts = await Contacts.read();

res.render("ContactUs", { contacts });
};


module.exports = {
  home,
  Testimonials,
  Contact,
  Testimonial,
  detailPage,
  adminPage,
  ToPics,
  listingPage,
  Message,
  aboutTopic,
  blogPage,
  servicesPage,
  contactUs,
};
