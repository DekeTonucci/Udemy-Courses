// Reminder on how this works in javascript
// this refers to what ever is to the left of function call:
// colors.printColor() refers to colors
const colors = {
  color: 'red',
  printColor() {
    // console.log(colors.color);
    // colors.color => this.color
    console.log(this.color);
  }
}

// colors.printColor();

const printColor = colors.printColor;
printColor();
