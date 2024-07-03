

//The For loop

var text = 'Hello For!!'

for(var i = 0; i < 10 ; i++){
    console.log(text, i);
}

//You have an array and basically you have to square each element of an Array


var sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var upArr = []; //EMPTY ARRAY
for (let index = 0; index < sampleArr.length; index++) 
{
    // var element = sampleArr[index] * sampleArr[index];
    upArr.push(sampleArr[index] * sampleArr[index])
}
console.log(upArr)