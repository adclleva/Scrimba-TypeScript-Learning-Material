import { Age } from './age.enum';
import { Names } from './name.enum';

function totalAge(age1: Age, age2: Age) {
    return age1 + age2;
}

console.log(totalAge(Age.dylan, Age.mother))
console.log("number")