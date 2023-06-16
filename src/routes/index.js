const auth = require("./auth.route");
const home = require("./home.route");
const teacher = require("./teacher.route");
const topics = require("./topics.trending");


module.exports = [auth, home, teacher, topics];
