// Area of Triangle
function Triangle(base,height){
    return (base*height)/2;

}
console.log(Triangle(2,4))

// Return Something to Me!
function giveMeSomething(words){
    return "something" +" "+ words

}
console.log(giveMeSomething("something"))

// Basketball Points
function Basketball(two,three){
    return(two*2+three*3)

}
console.log(Basketball(6,2))

// Less Than 100?
function Lessthen100(a,b){
    if(a+b<100){
    return true

}
else{
    return false
}
}
console.log(Lessthen100(50,53))

// Add up the Numbers from a Single Number
function  addUp(n){
    var sum=0;
    for (i=0;i<n;i++){
        sum+=i
    }
    return sum
}
console.log(addUp(9))

// Oddish vs. Evenish

function OddishOrEvenish(n){
    var sum=0;
    while (n!=0){
    r=n%10;
    console.log(r)
    sum+r;
    n=Math.floor(n/10);
}
if (sum%2==0){
    console.log("Evenish")

}
else{
    console.log("Oddish")
}
}
OddishOrEvenish(20)

// Any Prime Number in Range
function PrimeNumber(n1,n2){
    for (var i=1; i<=n2; i++){
        var Prime=0;
        for (var j=2; j<i; j++){
            if (i % j ==0){
                Prime= 1;
                break;
            }
        }
        if (i > 1 && Prime==0){
            console.log(i);
        }
    } 

}
PrimeNumber(8,12)

// Left Shift by Powers of Two
function leftShift(a,b){
    var power =1;
    i=1;
    c=2;
    while(i<=b){
        power=power*c
        i+=1

    }
    result=a*power 
    console.log(result)
}
leftShift(12,4)

// Convert a Number to Base-2
function binary(a){
    let decmial=a;
    var bin=(Number(decmial).toString(2));
    if (decmial<1024){
        console.log(bin);
    }
}
binary(10)