let blink = false;
let hand = false;
let leftEye = [].slice.call(document.querySelectorAll('#rect937'));
let rightEye = [].slice.call(document.querySelectorAll('#rect939'));

setTimeout(function(){
	f();
}, 2000);


function f(){
	if(blink){
		leftEye.forEach(function(eye, i){
			let y = parseFloat(eye.getAttribute('y'));
			let h = parseFloat(eye.getAttribute('height'));
			eye.setAttribute('height', h + 4);
			eye.setAttribute('y', y - 4);
			rightEye[i].setAttribute('height', h + 4);
			rightEye[i].setAttribute('y', y - 4);
		});
		blink = false;
		setTimeout(f, 2000);
	} else {
		leftEye.forEach(function(eye, i){
			let y = parseFloat(eye.getAttribute('y'));
			let h = parseFloat(eye.getAttribute('height'));
			eye.setAttribute('height', h - 4);
			eye.setAttribute('y', y + 4);
			rightEye[i].setAttribute('height', h - 4);
			rightEye[i].setAttribute('y', y + 4);
		});
		blink = true;
		setTimeout(f, 200);
	}
}

function landing(){
	let t = document.querySelector('.landing #rect937');
	let u = document.querySelector('.landing #rect939');
	
	if(blink){
		t.setAttribute('height', 8);
		t.setAttribute('y', 63.676292);
		u.setAttribute('height', 8);
		u.setAttribute('y', 63.676292);
	} else {
		t.setAttribute('height', 4);
		t.setAttribute('y', 67.676292);
		u.setAttribute('height', 4);
		u.setAttribute('y', 67.676292);
	}
}

function study(){
	let t = document.querySelector('.study-details #rect937');
	let u = document.querySelector('.study-details #rect939');
	
	if(blink){
		t.setAttribute('height', 8);
		t.setAttribute('y', 63.676292);
		u.setAttribute('height', 8);
		u.setAttribute('y', 63.676292);
	} else {
		t.setAttribute('height', 4);
		t.setAttribute('y', 67.676292);
		u.setAttribute('height', 4);
		u.setAttribute('y', 67.676292);
	}
}

function skills(){

}