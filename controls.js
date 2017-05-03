document.onkeydown = function (e) {
	var keys = {
		81: 'Q',
		87: 'W',
		69: 'E'
	};

	if(keys[e.keyCode] == 'Q'){
		init();
	} else if(keys[e.keyCode] == 'W'){
		for(var i = 0; i < 1000; i++){
			clearTimeout(main_timer);
		}
	} else if(keys[e.keyCode] == 'E'){
		for(var i = 0; i < 1000; i++){
			clearTimeout(main_timer);
		}
		main_timer = setTimeout(main, 0);
	}
};

canvas.addEventListener("click", init);
