import { MY_NUMBER } from "./module.js";
import totalPrice from "./tasks/task1.js";


console.log('Answer is', MY_NUMBER)
console.log(totalPrice({price: 100000, discount: 25, isInstallment: true, months: 12}))