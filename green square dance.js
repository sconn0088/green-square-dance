var func = function() {
	$("#greensquare").animate({"top": "87%"}, 1500)
	$("#greensquare").animate({"left": "93%"}, 2000)
	$("#greensquare").animate({"top": "0%"}, 1500)
	$("#greensquare").animate({"left": "0%"}, 2000)
	setTimeout(func, 1000);
	
	var colors = ["green", "red", "purple", "blue"];
	for(var i = 0; i < colors.length; i++) {
		$("#greensquare").css("background-color", colors[i]);
		setTimeout(function() {
			$("#greensquare").css("background-color", colors[i%4]);
		}, 2500);
	}
}

func();
