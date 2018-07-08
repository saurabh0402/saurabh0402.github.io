let blink = false;

setTimeout(function(){
	f();
}, 2000);


function f(){
	let t = document.getElementById('rect1028');
	let u = document.getElementById('rect1030');
	if(blink){
		t.setAttribute('height', 8);
		t.setAttribute('y', 42.756592);
		u.setAttribute('height', 8);
		u.setAttribute('y', 42.756592);
		blink = false;
		setTimeout(f, 2000);
	} else {
		t.setAttribute('height', 4);
		t.setAttribute('y', 46.756592);
		u.setAttribute('height', 4);
		u.setAttribute('y', 46.756592);
		blink = true;
		setTimeout(f, 200);
	}
}