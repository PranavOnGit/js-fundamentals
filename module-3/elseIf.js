

//ELSE IF Statements

/*   90 - 100 : A
     70 - 89 : B
     50 - 69 : C
     Less then 50 : failed    
*/

var score = 45

if(score >= 90 && score <= 100)
{
    console.log('Grade : A');
}
else if(score >= 70 && score <= 89)
{
    console.log('Grade : B');
}
else if(score >= 50 && score <= 69)
{
    console.log('Grade : C');
}
else if(score < 50)
{
    console.log('Failed!')
}