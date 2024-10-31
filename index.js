console.log("For real, I have a blood feud against frozen yogurt.")

const userInputOrder = prompt(
    "Enter your order separated by commas, you filthy froyo-loving degenerate.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavors = userInputOrder.split(",");
console.log(flavors)

const orders = {
    swill: ["vanilla", "strawberry", "coffee"]
}

for (let i = 0; i < flavors.length; i++) {
    console.log(flavors[i]);
}

const count = {};

for (const item of flavors) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }

console.log(count);