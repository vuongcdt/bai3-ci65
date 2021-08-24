export default class Vacxin {
  constructor(name, brand, country) {
    this._name = name;
    this._brand = brand;
    this._country = country;
  }

  set name(value) {
    this._name = value;
  }
  set brand(value) {
    this._brand = value;
  }
  set country(value) {
    this._country = value;
  }

  get name() {
    return this._name;
  }
  get brand() {
    return this._brand;
  }
  get country() {
    return this._country;
  }
}
