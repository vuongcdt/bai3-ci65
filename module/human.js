export default class Human {
  constructor(id, name, age, sex, address) {
      this._id = id;
    this._name = name;
    this._age = age;
    this._sex = sex;
    this._address = address;
  }

  set id(value) {
    this._id = value;
  }
  set name(value) {
    this._name = value;
  }
  set age(value) {
    this._age = value;
  }
  set sex(value) {
    this._sex = value;
  }
  set address(value) {
    this._address = value;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get address() {
    return this._address;
  }
  get sex() {
    return this._sex;
  }
}
