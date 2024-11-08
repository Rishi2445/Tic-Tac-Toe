// let a =1
// do{
//     console.log("Etery");
//     a++;
// }while(a<=25);

// for of Loop & for in Loop

// For of loop help to loop on strings and arrays 
let str = "JavaScripts"
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}

console.log("Sting size is",size);

// For-in Loop will retuns to keys of objects from key value pair

let student = {
    age:20,
    name:"Rohit Sharma",
    rollNumber :45,
    isPass:true,
}

for(let key in student){
    console.log("the key is", key, "Value is :", student[key]);
}

// print all  numbers 0 to 100

for(let i=0; i<=100; i++){
    if(i%2 !== 0){
        console.log(i);
    } 
}


//
// let gameNumber ="24";
// let usrNum = prompt("guess the game number:  ");
// while(usrNum != gameNumber){
//      usrNum = prompt("you enterd wrong Number renter the :  ");
// }
// console.log("Congulations you entered the Right Number");


// Stings 

let rohan = "my Name is Rohan";
console.log(rohan[9]);

//Template liters 

let Sentence =`Hi are you there`;
console.log(Sentence);

let output = `Name of student is ${student.name} and his roll number is ${student.rollNumber} `;
console.log(output)

// let Name = prompt("Enter your full name");
// let userName = '@'+Name +Name.length;
// alert(userName);

let marks =[92,86,45,68,54,99,89,91];

let sum =0;
for(let values of marks){
    sum = sum + values;
}
console.log(sum);
let avg = sum/marks.length
console.log("Avrage marks of student", avg);

let heros =['iron-man', 'hulk', 'thor','bat-man', 'super-man', 'spider-man'];
let cities = ['Mumbai', 'Pune', 'Nashik','Sangali', 'Solapur']
console.log(marks);
console.log(heros);

for(let index= 0; index< marks.length; index++){
    console.log(marks[index]);
}

for (let idx=0; idx< heros.length; idx++){
    console.log(heros[idx]);
}

for(let el of cities){
    console.log(el.toUpperCase());
}

price=[750,540,230,900,690,880];

// let idx=0;
// for(let val of price){
//     console.log(`the price of items is ${val}`);
//     let offer = val / 10;
//     price[idx] = price[idx] - offer;
//     console.log(`after 10% discount the items price  is ${price[idx]}`);
//     idx++;
// }

for (i=0; i<price.length; i++){
    let item = price[i] / 10;
    price[i] -=item
}
console.log(price)

for(let i=0; i<price.length; i++){
    let item = price[i];
    price[i] >= item;
}

console.log('Price Array', price)

let componies = ['Bloomberg','microsoft', 'google','uber','ibm','Netflix'];

componies.shift()
console.log('Companies', componies);
componies.splice(2,1,'Ola');
console.log('Companies', componies);
componies.push('Amazon');
console.log('Companies', componies);

function calucator(x, y){
   console.log(x + y);
}

const arrowMultiple = (a ,b)=>{
  return a*b;
}

arrowMultiple(7, 7);

function countVovals(str){
    for (let i =0; i<=str.length; i++){
        if(str[i]=== 'a'||str[i]=== 'e'||str[i]=== 'i'||str[i]=== 'o'||str[i]=== 'u'){
         console.log(str[i]);
        }
    }
}

const countVoval = (str)=>{
    for (let i =0; i<=str.length; i++){
        if(str[i]=== 'a'||str[i]=== 'e'||str[i]=== 'i'||str[i]=== 'o'||str[i]=== 'u'){
         console.log(i);
        }
    }
}

countVoval("HowareyouToday");

componies.forEach(function printval(val, idx, arr){
    console.log(val.toUpperCase(),idx, arr)
})

let numbers =[1,2,3,4,5,6,7,8,9,10];

let squareofMarks = marks.map((val)=>{
    return val*val
})

console.log(squareofMarks);

let evenArr = marks.filter((val)=>{
    return val > 90;
})

console.log(evenArr);

let n = prompt("Enter a number:  ");

let arr = [];
for (let i = 1; i<=n; i ++){
    arr[i-1]=i;
}
console.log(arr);

let sumofn = arr.reduce((prvious, current)=>{
    return prvious + current;
})

console.log('sum of n',sumofn);

let factorial = arr.reduce((prvious, current)=>{
    return prvious * current;
})

console.log('Factorial is', factorial);

price.forEach((val)=>{
    console.log('mostValuable', val);
})

let topper =marks.reduce((prev , curr)=>{
    return prev > curr ? prev : curr;
})

console.log("The top scorrer in class is with :", topper)

function isPalindrome(str){
    if(str === str.split().reverse().join()) {
        return true;
    } 
}

console.log(isPalindrome('level'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('kazak'));

console.log(isPalindrome('lol'));

function longestWord(sentence) {
    const words = sentence.split(" ");
    const reversewords = words.reverse();
    return reversewords.reduce(function (a,b){
       return a.length > b.length ? a : b;
    }) 
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));