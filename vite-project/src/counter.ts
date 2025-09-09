const specificDateTime: Date = new Date('2020-03-10T23:59:59');

console.log(specificDateTime)

const currentDate: Date = new Date();

const year: number = currentDate.getFullYear();
const month: number = currentDate.getMonth();
const day: number = currentDate.getDate();
const day2: number = currentDate.getDay();

console.log('Year is: ', year)
console.log('Month is: ', month + 1) // index starts with a 0, so add a +1
console.log('Day is: ', day)
console.log('Index of the day is: ', day2)