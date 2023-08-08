let arrObject = [
    {
        name: "Luke Skywalker",
        height: 1.77,
        gender: "male",
        mass: 77,
        eye_color: "brown",
      },
      {
        name: "Leia Organa",
        height: 1.6,
        gender: "female",
        mass: 56,
        eye_color: "blue",
      },
      {
        name: "Han Solo",
        height: 1.8,
        gender: "male",
        mass: 80,
        eye_color: "brown",
      },
      {
        name: "Chewie",
        height: 2.22,
        gender: "male",
        mass: 190,
        eye_color: "black",
      },
      {
        name: "kevien",
        height: 1.06,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
      },
    ];

    //Find
    console.log("==".repeat(10) + "Find" + "==".repeat(10));
let find = arrObject.find((value)=> value.eye_color === "blue");
console.log(find.name);
let mass = arrObject.find((value)=> value.mass > 50 );
console.log(mass.gender);


//Filter
console.log("==".repeat(10) + "Filter" + "==".repeat(10));
let filtlinght = arrObject.filter((value)=> value.height < 2.0 );
console.log(filtlinght);
let filtmale = arrObject.filter((value)=> value.gender === "male" );
console.log(filtmale);


//Map

console.log("==".repeat(10) + "Map" + "==".repeat(10));
let allnames = arrObject.map((value)=> value.name);
console.log(allnames);
let allhigt = arrObject.map((value)=> value.height);
console.log(allhigt);


//Sort
console.log("==".repeat(10) + "Sort" + "==".repeat(10));

let sormass = arrObject.sort(function (a,b) {
    return a.mass - b.mass;
});
console.log(sormass);
let sorhight = arrObject.sort(function (a,b) {
    return b.height - a.height;
});
console.log(sorhight);


//Every
console.log("==".repeat(10) + "Every" + "==".repeat(10));

let isMass = arrObject.every((v)=> v.mass > 40);
console.log(isMass);
let ishight = arrObject.every((v)=> v.height < 2);
console.log(ishight);


//Some
console.log("==".repeat(10) + "Some" + "==".repeat(10));

let hasblue = arrObject.some((v)=> v.eye_color === "blue");
console.log(hasblue);
let hastall = arrObject.some((v)=> v.height > 2.10);
console.log(hastall);

