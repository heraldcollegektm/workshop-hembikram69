function toArray(obj){
  console.log(Object.entries(obj))
}

console.log(toArray({ shrimp: 15, tots: 12 }))

// olderthanme
class Person{
  constructor(name,age){
      this.name = name
      this.age = age
  }
  compareAge(obj){
      if(this.age-obj.age>0){
          console.log(`${obj.name} is smaller than me`)
      }
      else if(this.age-obj.age<0){
          console.log(`${obj.name} is Older than me`)
      }
      else if(this.age-obj.age==0){
          console.log(`${obj.name} is same as me`)
      }
      
      
  }
}

p1 = new Person("Pranay", 24)
p2 = new Person("Rohan", 36)
p3 = new Person("Hem", 24)

p1.compareAge(p2)

// priceofgrossary
function getTotalPrice(obj){
  let sum = 0
  for(i in obj){
      sum = sum+obj.quantity*obj.price
  }
  

}



console.log(getTotalPrice([
  { product: "Meat", quantity: 1, price: 1.50 },
  { product: "Rice", quantity: 12, price: 0.10 },
  { product: "Meal", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
  ]))

  // trueorfalse

function countTrue(val){
    let frequencyCounter ={}
    val.forEach((i)=>{
        frequencyCounter[i] = (frequencyCounter[i] || 0)+1
    })
    console.log(frequencyCounter[true])


}

countTrue([true,false,true,false,true])

// voteCount
function getVoteCount(obj){
  console.log(obj.upvotes-obj.downvotes)

}

getVoteCount({ upvotes: 2, downvotes: 33 })

// Print Array
function getVoteCount(obj){
  console.log(obj.upvotes-obj.downvotes)

}

getVoteCount({ upvotes: 2, downvotes: 33 })
