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


// Challenge 2
// Write a function that accepts an object of users divided into employees and
// managers, and display the number of characters per employee/manager's name, as
//  shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function users_arr(users){
     for (type in users){
         console.log(type.toUpperCase())
         for (var i = 0; i < users[type].length; i++){
           var first = users[type][i].first_name;
           var last = users[type][i].last_name;
           console.log((i+1)+" - "+first.toUpperCase()+" "+last.toUpperCase()+" - "+(first.length+last.length)
           );
         }
         }
     }


users_arr(users);
