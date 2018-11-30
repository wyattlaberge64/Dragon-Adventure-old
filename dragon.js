/* This is a starter with examples.  Remove the examples once you have made your own versions. */

'use strict'
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var name = null;
var spin = 0;

var start = function () {
    setup(); // Helper Function
    voiceInForest();  // Change this to fit your first scene
}

window.onload = start;  // Kicks off program

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
    if (answer == "Think more") {
       thinking();
     } 
      else if (answer == "Go forest") {
        forest();
     }
	  else if (answer == "Ignore it") {
		home(); 
	 }
	  else if (answer == "Go in"){
		forest();
	 }
	  else if (answer == "Go home"){
		home();
	 }
	  else if (answer == "Go To Portal"){
		portal();
	 }
	  else if (answer == "Look Around(Forest)") {
		forestExamine();
	 }
	  else if (answer == "Go To Field") {
		field(); 
	 }
	  else if (answer == "Go To Item Vender") {
		itemVender();  
	 }
	  else if (answer == "Go Back(forest)") {
		forestExamine();  
	 }
	  else if (answer == "Look Around(Field)") {
		fieldExamine();  
	 }
	  else if (answer == "Go To Pipe") {
		pipe();
	 }
	  else if (answer == "Go To Wolf") {
		injuredWolf();  
	 }
	  else if (answer == "Go To Warlock") {
		travelingWarlock();  
	 }
	  else if (answer == "Go Into The Pipe") {
		sewer();  
	 }
}


function voiceInForest(){  // FIRST SCENE - WELCOMES PLAYER
var name = prompt("what is your name?");
story("You a young dragon are heading back home from you treasure hunting journey when suddenly you hear a voice from the forest saying \
\n Come into the forest " + name + " your adventure is just beginning");

  choices = ["Think more", "Go forest", "Ignore it"];
  answer = setOptions(choices);
} 
  
 function thinking() {  // SET A SCENE
  story("As you think about this you feel that this situation is very familiar to you\
  \n or your probably thinking about it to much.");
 
  choices = ["Go in", "Go home"];
  answer = setOptions(choices);  
}
  
 function forest() {
  story("You go into the forest to see what you sort of an adventure is in there\
  \n and any secrets you find along the way.");
  
  choices = ["Go To Portal","Look Around(Forest)","Hang Out Here"];
  answer = setOptions(choices);
} 

 function forestExamine() {
  story("You look around the forest to see\
  \n a portal on the ground, a item vender and a clearing the leads to an open field.");
  
  choices = ["Go To Portal","Go To Field","Go To Item Vender"];
  answer = setOptions(choices);
}

 function portal() {
  story("You walk towards a glowing portal on the ground, \
  \n you are unsure about it and get an uneasy feeling about it.");
  
  choices = ["Step On To Portal","Go Back(forest)",""];
  answer = setOptions(choices);
}

 function itemVender() {
  story("You head towards the item vender and you see that he has many items like \
  \n a healing potion, a apple pie, a bone, an antidote for poison and an axe \
  \n you think about what you should get. (You can only hold 3 items)");
  
  choices = ["Potion","Pie","The Bone","Antidote","Axe","Go Back(forest)"];
  answer = setOptions(choices);
}

 function field() {
  story("You head towards the clearing and go to the field to see what's ahead.");
  
  choices = ["Look Around(Field)","Go Back(forest)",""];
  answer = setOptions(choices);
}

 function fieldExamine() {
  story("You look around the big open field to see \
  \n a pipe that blends in well with grass in the field, a wolf that looks like its been injured \
  \n and a warlock that seems to be traveling.");
  
  choices = ["Go To Pipe","Go To Wolf","Go To Warlock","Go Back(forest)"];
  answer = setOptions(choices);
}

 function pipe() {
  story("You walk up to the pipe and you see that it has an entrance at the top of it \
  \n and you think that this seems familiar.");
  
  choices = ["Go Into The Pipe","Go Back(Field)",""];
  answer = setOptions(choices);
}

 function injuredWolf() {
  story("");
  
  choices = ["Give Potion","Give Bone","Go Back(Field)"];
  answer = setOptions(choices);
}

 function travelingWarlock() {
  story("");
  
  choices = ["Talk To Him","Give Antidote","Give Pie","Go Back(Field)"];
}


 
 function home() {
  story("You decided to ignore the voice and go home\
  \n as you are heading back home you think to yourself\
  \n could there really have be a grand adventure in that forest.");
}
 
 
/* function spinInCircle() { // CHANGE VALUE IF RETURN
 *     spin = spin + 1;
 *    if (spin == 3) {
 *         story("Why are you doing that?\
 *         \n It makes me a little nauseous just to watching you\n\n");
 *         forest();
 *     } else if (spin == 4) {
 *         story("Seriously, please stop\
 *         \nI can't keep watching this\n\n");
 *        forest();
 *    } else if (spin == 5) {
 *         story("Oh god I have to go\n\n");
 *         forest();
 *    } else if (spin > 5) {
 *         story("We are sorry but the narrator for this bit went home sick.\n\n");
 *         forest();
 *     } else {
 *        story("You let you arm fly freely at your side as you spin in a circle.\
 *         \nAround and around you go as the world blurs in front of you\
 *         \nyou get dizzy and fall to the ground\
 *         \nyou take a moment to gather your thoughts then you stand back up\n\n");
 *         forest();
 *     }
 * }
 */
 
/* function stayQuite() { // Message Example
 * messages=["so your too good to talk to me huh",
 *         "big old person too proud to talk to a pixie",
 *         " you hear the pixie fly away in disgust"];
 *    delayText(messages, 3000, field);
 * 
 * } 
 */
