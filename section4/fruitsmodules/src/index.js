import foods from "./food";
import { choice, remove } from "./helpers";

let fruit = choice(foods);
console.log(`i'd like one ${fruit}, please`);
console.log(`Here you goo ${fruit}`);
console.log("Delicious, can I have another one?");
let resto = remove(foods, fruit);
console.log(`I am sorry, we're all out. We have ${resto.length} left`);
