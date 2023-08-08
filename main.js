
// if (10 > 11) {
    //   console.log("hvuhuiwe");
    // } else console.log("00392-0");
    
    // 10 > 11 ? console.log("knknr") : console.log("1233");
    
    //=================functions==================
    // console.log(sum("Khalled"));
    // function test1(name) {
    //   return name;
    // }

//-------------Arrow functions----------------
// let sum = (num1, num2) => num1 + num2;
// let div = (num1, num2) => num1 / num2;
// let min = (num1, num2) => num1 - num2;
// let sub = (num1, num2) => num1 * num2;

// console.log(sum(10, 10));
// console.log(div(10, 10));
// console.log(min(10, 10));
// console.log(sub(10, 10));

    //=================Arrey==================

    const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    // console.log(arr1);
    
    // let even = arr1.filter(function(v){
    //     return v%2 === 0;
    // })
    //    let odd = arr1.filter(function(v){
    //         return v%2 !== 0;
    //     })
    // console.log("The even numbers is\n" ,even ,"\nThe even numbers is\n", odd);


    let even = arr1.filter((v)  => v % 2 === 0);
    let odd = arr1.filter((v)  => v % 2 !== 0);
    // let fnd = arr1.find((v)  => v % 2 === 0);


    console.log(`The even numbers is: ${even}\nThe even numbers is: ${odd}`);
    // let n =arr1.splice(2,2)


arr1.forEach((value) => console.log(value*2),);
