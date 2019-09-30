// Part of MEAN tract at Coding Dojo

// Challange 1
// Write a function that accepts an array of student objects, as shown below.
// Print all of the students' names and their cohorts.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printer(arr){
    // set up a for loop
    for (var i=0; i< arr.length; i++){
        console.log("Name: "+arr[i].name+", Cohort: "+arr[i].cohort)
    }
    // go throught the array and console log the name and cohoard
}

printer(students)
