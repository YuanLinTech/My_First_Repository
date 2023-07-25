const day = "Timesday";

let dayValue = 0;

const values = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7
};

dayValue = (day in values) ? values[day] : -1;
console.log(dayValue);