
//OBJECT CREATION

var person = {
    name : 'Pranav',
    height : 5.5,
    age : 29,
    isBrilliant : true
}
console.log(person);


//dot operator for accessing object values

console.log(person.isBrilliant);
console.log(person.name);
console.log(person.age);
console.log(person.height);

//Access using Bracket Notation

console.log("Acceesing using bracket notation :",person['age']); 

var car = {
    brand : 'BMW',
    color : 'blue',
    isLux : true,
    model : 'X3',
    isElectric : false,
    models : ['v1', 'v2', 'v3'],
    engineData : {  
        type : 'v8',
        cylinders : 8,
        hp : 8000
    }
}

console.log(car);
console.log('Accessing array value from object : ', car.models[2] );
console.log('Accessing object value from object : ', car.engineData.type);

//Change keys in object
car.isLux = false;
console.log(car);

//Add values
car.ready = true;

console.log(car);

//Remove | using delete 

delete car.ready

console.log(car)