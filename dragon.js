/* This is a starter with examples.  Remove the examples once you have made your own versions. */
scene1 = voiceInForest;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
switch(answer) {
	case "Think More":
			thinking
			break; 
	case "Go Forest":
			forest
			break;
	case "Ignore It":
			home
			break;
	case "Go In":
			forest
			break;
	case "Go Home":
			home
			break;
	case "Go To Portal":
			portal
			break;
	case "Look Around(Forest)":
			forestExamine
			break;
	case "Go To Field":
			field
			break;
	case "Go To Item Vender":
			itemVender
			break;
	case "Go Back(forest)":
			forestExamine
			break;
	case "Look Around(Field)":
			fieldExamine
			break;
	case "Go To Pipe":
			pipe
			break;
	case "Go To Wolf":
			injuredWolf
			break;
	case "Go To Warlock":
			travelingWarlock
			break;
	case "Go Into The Pipe":
			sewer
			break;
	case "Look Around(Sewer)":
			sewerExamine
			break;
	case "Go Back(Field)":
			fieldExamine
			break;
	}
}

// L1S1
function voiceInForest(){  // FIRST SCENE - WELCOMES PLAYER
var name = prompt("what is your name?");
story("You are a young dragon is heading back home from your treasure hunting journey. When suddenly you hear a voice from the forest saying \
\n Come into the forest " + name + " your adventure is just beginning.");

  choices = ["Think More", "Go Forest", "Ignore It"];
  answer = setOptions(choices);
} 
  
 //L1S2
 function thinking() {  // SET A SCENE
  story("As you think about this you feel that this situation is very familiar to you.\
  \n That or your probably thinking about it to much.");
 
  choices = ["Go In", "Go Home"];
  answer = setOptions(choices);  
}
  
 //L1S3
 function forest() {
  story("You go into the forest to see what sort of an adventure is in there.\
  \n Also to hunt down any secrets in the forest.");
  
  choices = ["Go To Portal","Look Around(Forest)","Hang Out Here"];
  answer = setOptions(choices);
} 

 //L1S4
 function forestExamine() {
  story("You look around the forest to see.\
  \n a portal on the ground, a item vender and a clearing the leads to an open field.");
  
  choices = ["Go To Portal","Go To Field","Go To Item Vender"];
  answer = setOptions(choices);
}
 
 //L1S5
 function portal() {
  story("You walk towards a glowing portal on the ground. \
  \n You are unsure about it and get an uneasy feeling about it.");
  
  choices = ["Step On To Portal","Go Back(forest)",""];
  answer = setOptions(choices);
}
 
 //L1S6
 function itemVender() {
  story("You head towards the item vender and you see that he has many items. Like \
  \n a healing potion, a apple pie, a bone for some reason, an antidote for poison and an Axe. \
  \n You think about what you should get. (You can only hold 3 items)");
  
  choices = ["Potion","Pie","The Bone","Antidote","Axe","Go Back(forest)"];
  answer = setOptions(choices);
}
 //L1S7
 function field() {
  story("You walk towards the clearing. Heading to the field to see what's ahead.");
  
  choices = ["Look Around(Field)","Go Back(forest)",""];
  answer = setOptions(choices);
}
 
 //L1S8
 function fieldExamine() {
  story("You look around the big open field to see. \
  \n A pipe that blends in well with grass in the field, a wolf that looks like its been injured \
  \n and a warlock that seems to be traveling.");
  
  choices = ["Go To Pipe","Go To Wolf","Go To Warlock","Go Back(forest)"];
  answer = setOptions(choices);
}
 
 //L1S9
 function pipe() {
  story("You walk up to the pipe. You can see that it has an entrance at the top of it. \
  \n You think that this seems familiar.");
  
  choices = ["Go Into The Pipe","Go Back(Field)",""];
  answer = setOptions(choices);
}
 
 //L1S10
 function injuredWolf() {
  story("You head towards the wolf to take a closer look. \
   \n As you look over the wolf you see a lot of scratches on its body. \
   \n You believe that this wolf got separated from it's pack and got attacked \
   \n by something in the forest.");
  
  choices = ["Give Potion","Give Bone","Go Back(Field)"];
  answer = setOptions(choices);
}
 
 //L1S11
 function travelingWarlock() {
  story("As you walk towards the warlock you notice that he looks kind of orcish. \
  \n Then you suddenly get a scent that is very familiar to you. \
  \n As you see that he is getting weaker you realize what that scent might be. \
  \n You hope that your wrong about it so you believe that you should ask him.");
  
  choices = ["Talk To Him","Give Antidote","Give Pie","Go Back(Field)"];
  answer = setOptions(choices);
}
 
 //L1S12
 function sewer() {
  story("You jump into the pipe to see where it will take you \
  \n and you are taken into a sewer. You think that there is a \
  \n secret room somewhere because sewer usually hide secrets.");
  
  choices = ["Look Around(Sewer)","Go Back(Field)"];
  answer = setOptions(choices);
}

 //L1S13
 function sewerExamine() {
  story("As you look around the sewer you do not see anything \
  \n that indicates that there are any secrets. \
  \n Maybe if you had a companion(or some type of animal) that knows this sewer they could \
  \n find any secrets. But right now the smell of the sewer \
  \n is making you want to throw up. So you think it would be a \
  \n good idea to leave this place NOW!");
  
  choices = ["Go Back(Field)"];
  answer = setOptions(choices);
}
 
 function home() {
  story("You decided to ignore the voice and go home.\
  \n As you are heading back home you think to yourself.\
  \n Could there really have be a grand adventure in that forest.");
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
