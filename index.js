console.log("For real, I have a blood feud against frozen yogurt.")

let userInputOrder = prompt(
    "Enter your order separated by commas, you filthy froyo-loving degenerate.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavors = userInputOrder.split(",");
console.log(flavors)

const order = {
    swill: ["vanilla", "strawberry", "coffee"]
}

for (let i = 0; i < flavors.length; i++) {
    console.log(flavors[i])
}