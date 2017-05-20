var colors = ["green", "red", "purple", "blue"];
var index = 0;

var func = function() {
	$("#greensquare").animate({"top": "87%"}, 1500)
	$("#greensquare").animate({"left": "93%"}, 2000)
	$("#greensquare").animate({"top": "0%"}, 1500)
	$("#greensquare").animate({"left": "0%"}, 2000)
	setTimeout(func, 1000);
	
	$("#greensquare").css("background-color", colors[index]);
	index = index >= colors.length?0:index+1;
}

func();
