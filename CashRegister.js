function checkCashRegister(price, cash, cid) {
  const unitAmount = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  let inDrawer = 0;
  let arrayChange = [];
  for (let i of cid) {inDrawer = inDrawer + i[1];}
  //for floating point problem
  inDrawer = inDrawer.toFixed(2);
  let change = cash - price;
  let result = {status: "", change: []};
  if (change > inDrawer) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = arrayChange;
    return result;
  } 
  else if (change.toFixed(2) === inDrawer) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  } 
  else {
    cid = cid.reverse();
    for (let i of cid) {
      let t = [i[0], 0];
      while (change >= unitAmount[i[0]] && i[1] > 0) {
        t[1] = t[1] + unitAmount[i[0]];
        i[1] = i[1] - unitAmount[i[0]];
        change = change - unitAmount[i[0]];
        change = change.toFixed(2);
      }
      if (t[1] > 0) {arrayChange.push(t);}
    }
  }
  if (change > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }
  result.status = "OPEN";
  result.change = arrayChange;
  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}
