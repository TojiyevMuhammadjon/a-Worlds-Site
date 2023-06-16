const {v4: uuid} = require("uuid");

class Topics {
  constructor( text,image, name, field ) {
    this.id = uuid();
    this.text = text;
    this.image = image;
    this.name = name;
    this.field = field;
  }
}

module.exports = Topics;
