console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count>0) 
    {
        for (let i = 0; i <= count; i++) 
        {
            if (i %2 != 0) 
            {
            console.log(i);
            }
        }   
    }    
    for (let i = 0; i <= -count; i++) 
    {
        if (i %2 != 0) 
        {
        console.log(-i);
        }       

    }
};
printOdds(-20);
console.log();
printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName,age) {
    if (age>=16) 
    {
        console.log(`Congrats ${userName}, you can drive!`);
    }
    else if (age<16){
        console.log(`Sorry ${userName}, but you need to wait until you're 16 to drive.`);
    }   
};
//could have created variables and put those in the console.log. 
//Ex. const aboveSixteen = "You can drive!"
//console.log(aboveSixteen) in the if statement

checkAge("Kaylie", 35);
checkAge("Beckett", 4);
checkAge("", 12);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrant(x,y) {
    if (x== 0 && y ==0){
        console.log(`The point ${x},${y} is on the origin`);
    } 
    else if (x == 0) {
        console.log(`The point ${x},${y} is on the x axis`);    
    }
    else if (y == 0) {
        console.log(`The point ${x},${y} is on the y axis`);   
    }
    else if(x>0 && y>0){
        console.log(`The point ${x},${y} is in the first quadrant`);
    }
    else if(x<0 && y<0){
        console.log(`The point ${x},${y} is in the third quadrant`);
    }
    else if(x<0 && y>0){
        console.log(`The point ${x},${y} is in the second quadrant`);
    }
    else{
        console.log(`The point ${x},${y} is in the fourth quadrant`);
    }
   
};
quadrant(0,0);
quadrant(0,-2);
quadrant(4,0);
quadrant(-2,-2);
quadrant(2,-4);
quadrant(5,2);
quadrant(-3, 2);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(a, b, c) {
    if (a+b>c && c+b>a && a+c>b) {
        if (a == b && b == c && a==c) {
            console.log(`These lengths ${a},${b},${c} form an equilateral triangle.`);
        }
        else if (a==b || a==c || b==c) {
            console.log(`These lengths ${a},${b},${c} form an isosceles triangle.`);
        }
        else{
            console.log (`These lengths ${a},${b},${c} form a scalene triangle.`);
        }
    }
    else{
        console.log(`These lengths ${a},${b},${c} do not form a valid triangle.`);
    }
}; 
triangleType(1,2,2);
triangleType(2,3,4);
triangleType(2,2,2);
triangleType(0,4,5);
