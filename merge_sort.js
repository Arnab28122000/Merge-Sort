var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;	
canvas.width = window.innerWidth;

var len = canvas.width;
var board_size = canvas.height;

var l = []

canvas.addEventListener("click", init);

function init(){
	for(var i = 0; i < len; i++){
		l.push(Math.round(i * (board_size / len)));
	}
	for(var i = l.length - 1; i >= 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = l[i];
		l[i] = l[j];
		l[j] = tmp;
	}

	last_level = -1;
	curr_level = 0;
	update_pos = 0;
	for(var i = 0; i < len; i++){
		orig.push(l[i]);
		level_for_this_point.push(-1);
	}
	
	generator = mergesort(0, len - 1);
}
var generator;
init();
main();

function* mergesort(start, end){
	var size = end - start + 1;

	if(size <= 1){
		yield 0;
	}

	var half = start + Math.floor(size / 2);

	var first = mergesort(start, half - 1);
	var ret = first.next().value;
	while(ret != 0){
		yield ret;
		ret = first.next().value;
	}
	first = mergesort(half, end);
	ret = first.next().value;
	while(ret != 0){
		yield ret;
		ret = first.next().value;
	}

	var lcopy = l.slice(start, end + 1);
	var left = 0;
	var right = half - start;
	var curr = start;

	curr_level++;
	while(left != half - start && right != lcopy.length){
		if(lcopy[left] > lcopy[right]){
			l[curr] = lcopy[right];
			yield [curr, lcopy[right], curr_level];
			right++;
		} else {
			l[curr] = lcopy[left];
			yield [curr, lcopy[left], curr_level];
			left++;
		}
		curr++;
	}
	while(left != half - start){
		l[curr] = lcopy[left];
		yield [curr, lcopy[left], curr_level];
		left++;
		curr++;
	}
	while(right != lcopy.length){
		l[curr] = lcopy[right];
		yield [curr, lcopy[right], curr_level];
		right++;
		curr++;
	}
	yield 0;
}

function main(){
	var x = generator.next().value;

	if(x === 0){
		return 0;
	}

	render(x);

	setTimeout(main, 0);
}
