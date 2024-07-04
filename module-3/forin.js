


//FOR IN with Object

var persons = {
    firstname : 'Pranav',
    lastname : 'Chavan',
    country : 'India',
}
for(person in persons)
{
    console.log(person +' -> '+ persons[person] );
}


//FOR IN with Array

var fruites = ['Banana', 'Apple', 'Mango', 'guava']
for(fruite in fruites)
{
    console.log(fruite +' -> '+fruites[fruite])
}