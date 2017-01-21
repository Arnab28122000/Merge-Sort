canvas.height = window.innerHeight;	
canvas.width = window.innerWidth;

var last_level;

var board_size = canvas.height;
var len = canvas.width;

var orig = []
var level_for_this_point = []

function render(update){
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, len, board_size);

	l[update[0]] = update[1];
	level_for_this_point[update[0]] = update[2];
	last_level = update[2];

	for(var i = 0; i < l.length; i++){
		if(i == update[0]){
			ctx.fillStyle = '#00f';
			ctx.fillRect(i, 0, 1, l[i]);
		} else if (last_level == level_for_this_point[i]){
			ctx.fillStyle = '#0f0';
			ctx.fillRect(i, 0, 1, board_size);
			ctx.fillStyle = '#f40';
			ctx.fillRect(i, 0, 1, l[i]);	
		} else {
			ctx.fillStyle = "#f00";
			ctx.fillRect(i, 0, 1, l[i]);
		}
	}
}
