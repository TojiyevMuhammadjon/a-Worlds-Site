const {v4: uuid} = require("uuid");

class Services {
  constructor(text, image) {
    this.id = uuid();
    this.text = text;
    this.image = image;
}}

module.exports = Services;
