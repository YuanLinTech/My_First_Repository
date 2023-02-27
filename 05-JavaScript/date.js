const currentDateTime1 = Date(); // Current data and time in the local time zone in string representation
const currentDateTime2 = new Date(); // Current date and time in UTC and in ISO 8601 format
const date1 = new Date('December 17, 1995 03:24:00'); // Interpreted as local time, result in UTC
const date2 = new Date('2016-05-18T16:00:00Z'); // Result in UTC

console.log(currentDateTime1); // Mon Feb 27 2023 12:00:24 GMT+1100 (Australian Eastern Daylight Time)
console.log(currentDateTime2); // 2023-02-27T01:00:24.856Z
console.log(date1); /* 1995-12-16T16:24:00.000Z ('Z' is the zone designator for the zero UTC offset. 
'T' is a delimiter between date and time.) */
console.log(date2); // 2016-05-18T16:00:00.000Z

const date3 = Date('December 17, 1995 03:24:00'); // Current data and time in the local time zone in string representation

const date4 = new Date('December 17, 1995 03:24:00'); // Converted date and time in UTC and in ISO 8601 format

console.log(date3); // Mon Feb 27 2023 12:00:24 GMT+1100 (Australian Eastern Daylight Time)

console.log(date4); // 1995-12-16T16:24:00.000Z

console.log(date4.toString()); // Sun Dec 17 1995 03:24:00 GMT+1100 (Australian Eastern Daylight Time)

const date5 = new Date('2023-03-27');
console.log(date5); // 2023-03-27T00:00:00.000Z (time default to 00:00:00) if not specified
console.log(date5.toString()); // Mon Mar 27 2023 11:00:00 GMT+1100 (Australian Eastern Daylight Time)

