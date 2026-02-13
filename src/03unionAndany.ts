let subs: number | string = "1M";

let apiRequestSatus: "pending" | "success" | "error" = "pending";

apiRequestSatus = "success";

let airlineSeat: "aisle" | "window" | "middle";

airlineSeat = "aisle";

// 

const orders = ["12", "32", "34", "54"];

let currentorder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentorder = order;
    break;
  }
  currentorder = "11";
}

console.log(currentorder);
