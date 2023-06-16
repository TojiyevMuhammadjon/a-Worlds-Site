const {Router} = require("express");
const {
  home,
  detailPage,
  listingPage,
  adminPage,
  aboutTopic,
  blogPage,
  servicesPage,
  contactUs,
  ToPics,
  Testimonial,
  Testimonials,
  Message,
  Contact
} = require("../controllers/home.controller");
const isAuth = require("../middlewares/isAuth");

const router = Router();

router.get("/", home);
router.get("/detail-page", detailPage);
router.get("/listing-page", listingPage);
router.get("/admin", isAuth, adminPage);
router.get("/about", aboutTopic);
router.get("/allTestimonial", Testimonial);
// router.get("/", Testimonials);
router.get("/allMessage", Contact);
// router.get("/allMessage", Message)
router.get("/blog-page", blogPage);
router.get("/services", ToPics)
router.get("/services-page", servicesPage);
router.get("/contact-page", contactUs);

module.exports = router;
