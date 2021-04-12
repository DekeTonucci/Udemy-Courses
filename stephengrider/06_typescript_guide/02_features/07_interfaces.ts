// No interface
// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true
// }

// const printVehicle = (vehicle: {name: string; year: number; broken: boolean;}): void => {
//   console.log(`Name:  ${vehicle.name}`)
//   console.log(`Year:  ${vehicle.year}`)
//   console.log(`Broken:  ${vehicle.broken}`)
// };

// printVehicle(oldCivic);

// Interface
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

// Interface Version 2
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
};

printSummary(oldCivic);
printSummary(drink2);