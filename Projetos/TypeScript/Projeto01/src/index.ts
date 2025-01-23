let myAge = 33;
console.log(myAge);
let myAge2: string | boolean | number = 33
myAge2 = '33'
console.log(myAge2);
let myName = 'Lucas'
console.log(myName);
let myName2: string | boolean = 'Lucas'
myName2 = true
console.log(myName2);

let names: (string | boolean)[] = [];
names.push('Lucas')
names.push(true)
console.log(names);

let person = {
    Nome: 'Lucas',
    Idade: 33,
    isAdmin: true,
}
console.log(person);

let person2: {
    Nome: string | boolean;
    Idade: number | string;
    isAdmin: boolean | string;
}

person2 = {
    Nome: 'Lucas',
    Idade: 33,
    isAdmin: true
}
console.log(person2);

