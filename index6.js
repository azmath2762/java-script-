// const para=document.querySelectorAll("p")
// console.log(para)

let object = [
 {
     name :"ram",
     age : 23,
     country:"india",
     hobbies:["pubg","cricket"]
},
 {
    name:"raghu",
    age :28,
    country:"india",
    hobbies:["pubg","cricket"]
},


 {
    name:"ramanji",
    age :38,
    country:"africa",
    hobbies:["pubg","cricket"]
}
];

for(let i=0; i<=3; i++)
{ 
console.log(object[i]);
}
      
function getAge(){
    for (let i = 0; i < object.length; i++){
        if (object[i].age<30){
            const element  = object[i];
            console.log('name: ${element.name}\nage: ${element.age}\ncountry: ${element.country}\nhobbies: ${element.hobbies}');
    
        }
    }
}

getAge();

function getcountry(){
    for (let i = 0; i < object.length; i++){
        if (object[i].country == "india"){
            const element  = object[i];
            console.log('name: ${element.name}\nage: ${element.age}\ncountry: ${element.country}\nhobbies: ${element.hobbies}');
    
        }
    }
}

getcountry();



