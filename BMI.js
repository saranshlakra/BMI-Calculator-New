
// BMI Calculator using if/else, let, template literals
let markBMI, johnBMI, markHeight, johnHeight, markWeight, johnWeight;

// markBMI, johnBMI = Number;

markHeight = Number(prompt('Height in meter'));
markWeight = Number(prompt('Weight in kg'));

johnHeight = Number(prompt('Height in meter'));
johnWeight = Number(prompt('Weight in kg'));

markBMI =  markWeight / (markHeight*markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(`Mark's BMI is ${+markBMI}
John's BMI is ${+johnBMI}`);

if( markBMI > johnBMI ){
console.log('Mark BMI is greater');
}
else if(markBMI === johnBMI){
    console.log("Both have same BMI");
}
else if( markBMI || johnBMI != Number)
{
    console.log("Please enter valid number")
}
else{
    console.log('John BMI is greater');
}