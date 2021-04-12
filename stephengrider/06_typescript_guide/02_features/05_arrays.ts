const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// carMakers.push(100); // Typescript shows error as we are trying to add in a number to an array with strings

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [ new Date(), '2030-10-10'];
importantDates.push('2030-10-10')
importantDates.push(new Date())
// importantDates.push(100) // Typescript shows error as number is not a type for this array