import { MY_NUMBER } from "./module.js";
import { COMMENTS_URL, getData } from "./tasks/task3.js";


console.log('Answer is', MY_NUMBER)


const commentData = await getData(COMMENTS_URL)
console.log(commentData);