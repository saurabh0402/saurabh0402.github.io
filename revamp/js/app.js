let blink = false;
let hand = false;

setTimeout(function(){
	f();
}, 2000);


function f(){
	let t = document.getElementById('rect937');
	let u = document.getElementById('rect939');
	
	if(blink){
		t.setAttribute('height', 8);
		t.setAttribute('y', 63.676292);
		u.setAttribute('height', 8);
		u.setAttribute('y', 63.676292);
		blink = false;
		setTimeout(f, 2000);
	} else {
		t.setAttribute('height', 4);
		t.setAttribute('y', 67.676292);
		u.setAttribute('height', 4);
		u.setAttribute('y', 67.676292);
		blink = true;
		setTimeout(f, 200);
	}
}