

//FOR OF loop. Works with keys intead VALUES

var array = [10, 20, 30, 40, 50]

for (const iterator of array) {
    console.log(iterator)
}

for (var iterator of array) 
{
    iterator = iterator + 5
    console.log(' '+iterator)
}


// With erntries()
for (var [index, value] of array.entries()) 
{
    console.log(index +' -> '+ value)
}