function processOrderList(orderList, orderId, state) {
  // Write your code here
  return orderList
    .map((item) => ({
      ...item,
      state: item.id === orderId ? state : item.state,
    }))
    .filter((item) => item.state !== "Delivered");
}

let orderList = [
  { id: 1, state: "Received" },
  { id: 4, state: "Received" },
  { id: 2, state: "Received" },
  { id: 3, state: "Delivered" },
];
console.log(processOrderList(orderList, 2, "Updated"));
