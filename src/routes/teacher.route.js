const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const {create, getTeacher, deleteTeacher, TEACHERd} = require("../controllers/teacher.controller");

const router = Router();

router.post("/admin/services", isAuth, create);
router.get("/get/services", isAuth, getTeacher);
router.get("/delete/teacher", isAuth, deleteTeacher);
router.post("/teacher/id", isAuth, TEACHERd);

module.exports = router;
