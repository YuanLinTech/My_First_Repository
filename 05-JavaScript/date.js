const currentDateTime1 = Date();
const currentDateTime2 = new Date();
const date1 = new Date('December 17, 1995 03:24:00'); // Interpreted as local time (GMT+11)
const date2 = new Date('2016-05-18T16:00:00Z'); // Interpreted as UTC

console.log(currentDateTime1); // Sat Feb 25 2023 22:26:16 GMT+1100 (Australian Eastern Daylight Time)
console.log(currentDateTime2); // 2023-02-25T11:26:16.988Z
console.log(date1); /* 1995-12-16T16:24:00.000Z ('Z' is the zone designator for the zero UTC offset. 
'T' is a delimiter between date and time.) */
console.log(date2); // 2016-05-18T16:00:00.000Z