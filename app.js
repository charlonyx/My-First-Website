//Adds the value in the input box by 'num'
function add(num){ 

	//Gets element with ID "sum" and adds to it by num
	var sum=document.getElementById('sum');
	sum.value=parseInt(sum.value) + num;
}

//Gets a Random Color
function getRandomColor() {

	//creates an array of hexadecimal values
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
	
	//builds a string of 6 with random hexadecimal values
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Gives two boxes a random color, and puts them at a random distance 
function changeBox(){
	var boxes;
	
	//Gets elements with class "colorBox"
	boxes  = document.getElementsByClassName('colorBox');
	
	//gets a random hexadecimal color
	var color=getRandomColor();
	
	//sets the boxes as a random color, and puts them at a random distance
	for (var i=0; i<boxes.length; i++){
		boxes[i].style.background = color;
		boxes[i].style.left = Math.floor(Math.random()*90) + '%';
	}	
}