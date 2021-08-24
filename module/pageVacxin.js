export default class PageVacxin {
  constructor(human, vacxin, date) {
    this._human = human;
    this._vacxin = vacxin;
    this._date = date;
  }

  set human(value) {
    this._human = value;
  }
  set vacxin(value) {
    this._vacxin = value;
  }
  set date(value) {
    this._date = value;
  }

  get human() {
    return this._human;
  }
  get vacxin() {
    return this._vacxin;
  }
  get date() {
    return this._date;
  }
}
