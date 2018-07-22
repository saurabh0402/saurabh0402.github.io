(function(){
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

	document.getElementsByClassName('scrollDown')[0].onclick = function(){
		let maxScroll = document.getElementsByClassName('cont')[0].getBoundingClientRect().height;
		//console.log(maxScroll);
		scroll(0, maxScroll);
	};

	function scroll(cur, maxScroll){
		document.getElementsByClassName('container')[0].scrollTo(0, cur);
		if(cur < maxScroll){
			setTimeout(function(){
				scroll(cur, maxScroll)
			}, 20);
		}

		cur += 50;
		if(cur > maxScroll)
			cur = maxScroll;
	}

})();