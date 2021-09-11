// var userBalance = 1000;
// var withdrawAmount = 1100;
// var userBlocked = true;


// if(!userBlocked){
//     if (userBalance >= withdrawAmount) {
//         console.log("Pul Verildi :" + withdrawAmount + "azn");
//     }
//     else {
//         console.log("pul yoxdur");
//     }
// } else {
//     console.log("blok olunmusuz");
// }

// if((userBalance >= withdrawAmount) && !userBlocked){
//     console.log("Pul Verildi :" + withdrawAmount + "azn");

// } else {
//     console.log("pul ceke bilmezsiz");
// }

//  var result = (userBalance>=withdrawAmount) ? "Pul Verildi :" + withdrawAmount + "azn" : "pul yoxdur";

// console.log(result)

// var a = 5;

// var b = 8;

// var c = 10;

// if (a>c || c>b && c>b) {
//     console.log("sert odenir")
// }else{
//     console.log("sert odenmir")
// }


// var number = 99;
// if(number%2==0){
//    console.log("Cutdur");

// }else{
//     console.log("Tekdir");
// }



//istifadecinin maasi alinir. eger maas 1500den yuxaridirsa maasin 10 faizi ondan cixilir ve maas print olunur. eger asagidirsan 20faizi ondan cixilir ve maas print olunur.


// var salary = 2000;

// if (salary>1500) {
//     salary -= (salary*10/100)
// }else{
//     salary -= (salary*20/100)
// }
// console.log(salary)


// var number = 10;
// while (number<=20) {
//     console.log(number);
//     number++;
// }

// var number = 10;
// while (number>=0) {
//     console.log(number);
//     number--;
// }

var x = 153;
var y = 264;

if (y>x&&x>0) {
    
    while (x<=y) {
        if (x%2==0) {
            console.log(x);
        }
        x++;
    }
}
else{
    console.log("Sert Odenmir")
}