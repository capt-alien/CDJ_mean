// coding Dojo: Javascript OOP assigment


/**
Create a new object constructor called Ninja with the following attributes:

name
health
speed (private)
strength (private)
Speed and strength should be 3 by default. Health should be 100 by default.

Ninja should have the following methods:

sayName() - This should log that Ninja's name to the console.
showStats() - This should show the Ninja's name, strength, speed, and health.
drinkSake() - This should add +10 Health to the Ninja
Example Outputs
*/

function Ninja(name, health=100, speed=3, strength=3){
    this.name=name;
    this.health=health;
    this.speed=speed;
    this.strength = strength;
    this.sayName = function(){
        console.log("My ninja name is "+name);
    };
}
Ninja.prototype.showStats = function(){
    console.log("Name: "+this.name);
    console.log("Strength: "+this.strength);
    console.log("Speed: "+this.speed);
    console.log("Health: "+this.health);
}
Ninja.prototype.drinkSake = function(){
    this.health += 10
}



var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, strength: 3"
ninja1.drinkSake();
ninja1.showStats();
