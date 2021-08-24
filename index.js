import { dataHuman, dataVacxin, dataPageVacxin } from "./data.js";
console.log(
  "Số người dân đã được tiêm ít nhất 1 loại vắc-xin:",
  dataPageVacxin.length
);
dataPageVacxin.forEach((value) => {
  let temp = [];
  let temp2 = [];
  value.vacxin.forEach((value) => {
    temp = [...temp, value.name];
  });
  value.date.forEach((value) => {
    temp2 = [...temp2, value];
  });

  let vacxins = temp.join(", ");
  let dates = temp2.join(", ");
  console.log(
    `Tên: ${value.human.name}, Tuổi: ${value.human.age}, loại vacxin: ${vacxins}, ngày tiêm: ${dates}`
  );
});

let sumVacxin = 0;
dataPageVacxin.forEach((value) => {
  sumVacxin += value.vacxin.length;
});
console.log("-----------------------------------------");
console.log("Số lượng liều vắc xin đã được tiêm: ", sumVacxin);
console.log("-----------------------------------------");

console.log("Thống kê những người già chưa được tiêm vắc-xin:");
let vacxin65 = dataHuman.filter((value) => value.age >= 65);
let pageVacxin65 = dataPageVacxin.filter((value) => value.human.age >= 65);

pageVacxin65.forEach((value) => {
  let idHuman = value.human.id;
  vacxin65.forEach((value) => {
    if (value.id != idHuman) {
      console.log(
        `Tên: ${value.name}, Tuổi: ${value.age}, đại chỉ: ${value.address}`
      );
    }
  });
});
