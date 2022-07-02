export function RandomBalance() {
  return Math.floor(Math.random() * 20000);
}

export function RandomDigits() {
  let x = [];
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 10);
    x.push(num);
  }
  return x;
}
/*
Get Date Configuration Object
*/ 

let dateObj = new Date();
let weekday = dateObj.toLocaleString("default", { weekday: "long" });
export const dateConfig = {
  currentDate: () => {
    let weekdayNumber: number = dateObj.getDate();
    let shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" })
      .format;
    let shortName = shortMonthName(dateObj);
    // EX: Friday, 1 Jul
    return `${weekday}, ${weekdayNumber} ${shortName}`;
  },
  getTimestamp: () => {
    let shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" })
      .format;
    let shortName = shortMonthName(dateObj);
    let day = dateObj.getDate()
    let year = dateObj.getFullYear()
    let time = dateObj.toLocaleTimeString()
    debugger
    // EX: 29 JUN 2022 | 1:02
    return `${day} ${shortName} ${year} | ${time}`;

  },
};
