function dateDiffInDays(date1, date2) {
  // Parse input dates
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

  // Convert dates to UTC milliseconds
  const utcDate1 = Date.UTC(parsedDate1.getFullYear(), parsedDate1.getMonth(), parsedDate1.getDate());
  const utcDate2 = Date.UTC(parsedDate2.getFullYear(), parsedDate2.getMonth(), parsedDate2.getDate());

  // Calculate the difference in days
  const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const diffInMilliseconds = utcDate2 - utcDate1;
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsInDay);

  return diffInDays;
}
// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
