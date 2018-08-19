


var colors = [];
var pickedColor;
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var game = {};
game.init  = function(){
	setUpModeButtons();
	setUpSquares();
	reset();
}
game.init();

// init();
// function init(){
// 	setUpModeButtons();
// 	setUpSquares();
// 	reset();
// }

function setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"?numSquares = 3:numSquares = 6;
			reset();

			});
		}
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++){
	//add initial colors
	// squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again";
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		});
	}

}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "Change Colors?"
	for(var i = 0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}	
	h1.style.backgroundColor = "steelblue";
}
	
// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	this.classList.add("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0;i<squares.length;i++){
// 		console.log("enter loop");
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0;i<squares.length;i++){
// 			console.log("enter loop");
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// });


resetButton.addEventListener("click",function(){
	reset();
});

// colorDisplay.textContent = pickedColor;

function changeColors(color){
	for(var i = 0;i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var g =Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var b =Math.floor(Math.random()*256);
	return "rgb(" +r + "," + " "+g + "," + " "+b + ")";
}



