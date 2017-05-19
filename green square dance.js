var func = function() {
	$("#greensquare").animate({"top": "87%"}, 1500)
	$("#greensquare").animate({"left": "93%"}, 2000)
	$("#greensquare").animate({"top": "0%"}, 1500)
	$("#greensquare").animate({"left": "0%"}, 2000)
	setTimeout(func, 1000);
}

func();