//creates three variables x,y,babyimage,bg
var x=20,y=600;
var babyImage;
var bg;
var objectiveReached;
//gives th e computer set of instructions to follow 
function setup() {
//creates the canvas with a width of 700 and height of 620 then loads two images and assigning the image that has been loaded to the variables 
createCanvas(700,620);
babyImage=loadImage("baby.png");
bg=loadImage("mazerunner2.png");
//mazerunner2Image=loadImage("mazerunner2.png");
}
//draws the image and enables it to move when the arrow keys are pressed and released
function draw () {
//clears the image from the previous position to the new position when the arrows are pressed and released
clear();
//loads the background image 
image(bg,0,0);
//when the right arrow key is pressed down the x value increases by two pixels
var oldx=x;
var oldy=y;
if(keyIsDown(RIGHT_ARROW))
	x+=12;
//when the left arrow key is pressed down the x value is reduced by two pixels
if(keyIsDown(LEFT_ARROW))
	x-=12;
//when the up arrow key is pressed down the y value is decreased by two pixels
if(keyIsDown(UP_ARROW))
	y-=12;
//when the down arrow key is pressed down the y value is increased by two pixels
if(keyIsDown(DOWN_ARROW))
	y+=12;

//prevents the sprite from moving out of the canvas
if (y>514)
    y=514;
if (x>600){
    x=0;
    y=550;}


//defines the color where the sprite is positioned on the canvas 
var color = get(x,y);
var colorright =get(x+10,y);
var colordown =get(x,y+8);

//shows the cordinates of the color in the console
//console.log(color);
if (color[2]==35){
x=oldx;
y=oldy;
}
if (colorright[2]==35){
x=oldx;
y=oldy;
}
if (colordown[2]==35){
x=oldx;
y=oldy;
}
if (color[0]==35 && color[1]==65 && color[2]==195) {
objectiveReached=true;
}
else objectiveReached=false;
if (objectiveReached) {
fill(Math.random() *255, Math.random() *255, Math.random() *255);
rect(480,100,200,20);
text("you got the crystal",480,115);
}
//sets the color of the rectangle
fill (130,0,230,130);
//draws the rectangle
rect (10,5,150,20);
//displays the color cordinates
text (colordown,20,20)
//Load the babyImage at the coordinate x and y
image(babyImage,x,y)
}

//creates a variable with an empty array
var pressedKeys=[];
//when the arrow keys are pressed it feeds the empty array with new cordinates
function keyPressed () {
if(pressedKeys.indexOf(keyCode)<0)
pressedKeys.push(keyCode);
}

function keyReleased() {
pressedKeys=[];
if(pressedKeys.indexOf(keyCode)>=0)
pressedKeys.splice(pressedKeys.indexOf(keyCode),1);
}

function keyIsDown(key) {
return pressedKeys.indexOf(key)>=0;
}
