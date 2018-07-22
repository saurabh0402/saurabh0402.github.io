(function(){	
	let conts = [];
	let resizeId;

	document.getElementsByClassName('container')[0].addEventListener('scroll', function(){
		[].forEach.call(document.getElementsByClassName('image-cont'), (e, i) => {
			if(i == 0){
				let t = conts[i];
				if(this.scrollTop > 0){
					if(this.scrollTop > 0 && this.scrollTop <= t.bottom - window.innerHeight){
						e.style.top = this.scrollTop + "px";
					}
				}
			} else {
				let t = conts[i], u = conts[i-1];
				if(this.scrollTop > u.bottom - window.innerHeight){
					if(this.scrollTop > t.top && this.scrollTop <= t.bottom - window.innerHeight){
						e.style.top = this.scrollTop + "px";
					}
				}	
			}
		});

	});

	function init(){
		while(conts.length > 0){
			conts.pop();
		}

		[].forEach.call(document.getElementsByClassName('image-cont'), function(e, i){
			conts.push(document.getElementsByClassName('cont')[i].getBoundingClientRect());

			if(i == 0){
				e.style.top = "0px";
			} else {
				let t = document.getElementsByClassName('cont')[i-1].getBoundingClientRect();
				e.style.top = t.top + t.height + "px";
			}
		});
	}

	function resize(){
		let temp = document.getElementsByClassName('container')[0].scrollTop;
		document.getElementsByClassName('container')[0].scrollTo(0,0);
		init();
	}

	window.addEventListener('load', init);
	window.addEventListener('resize', function(){
		clearTimeout(resizeId);
		resizeId = setTimeout(resize, 500);
	});
})();