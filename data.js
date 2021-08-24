import Human from "./module/human.js";
import Vacxin from "./module/vacxin.js";
import PageVacxin from "./module/pageVacxin.js";

export const dataHuman = [
  new Human(1, "Le Van A", 32, "Nam", "Ha Noi"),
  new Human(2, "Ly Thi B", 66, "Nu", "Hai Phong"),
  new Human(3, "Tran C", 12, "Nam", "Ha Noi"),
  new Human(4, "Do D", 44, "nam", "Hai Duong"),
  new Human(5, "Do E", 74, "nam", "Ha Tay"),
  new Human(6, "Le Van F", 82, "Nam", "Ha Noi"),
  new Human(7, "Ly Thi H", 96, "Nu", "Hai Phong"),
  new Human(8, "Tran G", 32, "Nam", "Ha Noi"),
  new Human(9, "Do I", 84, "nam", "Hai Duong"),
  new Human(10, "Do K", 74, "nam", "Ha Tay"),
];

export const dataVacxin = [
  new Vacxin("COVID-19 vaccine Astrazeneca", "AstraZeneca", "Anh"),
  new Vacxin("SPUTNIK V", "Gamaleya", "Nga"),
  new Vacxin("Vero Cell", "Sinopharm", "Trung Quoc"),
];

export const dataPageVacxin = [
    new PageVacxin(dataHuman[0], [dataVacxin[0],dataVacxin[1]],["22/05/2021", "22/01/2021"]),
    new PageVacxin(dataHuman[1],[ dataVacxin[2]],["25/01/2021"]),
];
  