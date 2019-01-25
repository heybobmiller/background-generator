//alert("2");

var _css = document.querySelector("h3");
var _c1 = document.querySelector(".color1");
var _c2 = document.querySelector(".color2");
var _c3 = document.querySelector(".color3");
var _c4 = document.querySelector(".color4");
var _c5 = document.querySelector(".color5");
var _c6 = document.querySelector(".color6");
var _c7 = document.querySelector(".color7");
var _body = document.getElementById("gradient");
//var _bsb = document.getElementById("gradient");
var _rotate = document.getElementById("idRotate");
var _degree = 90;
var _spin = document.getElementById("idSpin");
var _newSpin = document.getElementById("idNewSpin");

function setGradient(){
	var vString = "linear-gradient(" + _degree + "deg, " + 
	_c1.value + "," + 
	_c2.value + "," + 
	_c3.value + "," + 
	_c4.value + "," + 
	_c5.value + "," + 
	_c6.value + "," + 
	_c7.value +
	")";
	_body.style.background = vString;
	_css.textContent = _body.style.background;
}

function spinIt(){
	for(i=0;i<100;i++){
		//alert("spinIt");
		setTimeout(rotateGradient, 1000);
		//_rotate.click(); 
	}
}

function run(interval,frames){
	var int=0;

	function func(){
		//_body.id = "b" + int;
		_body.style.backgroundImage = "linear-gradient(" + _degree + "deg, " + _c1.value + "," + _c2.value + "," + _c3.value + "," + _c4.value + "," + _c5.value + "," + _c6.value + "," + _c7.value + ")";
		int++;
		if(int === frames){int = 0;}
	}

	var swap = window.setInterval(func, interval);

}

function rotateGradient(){
	if(_degree > 340){
		_degree = 0;
	} else {
		_degree = _degree + 10;
	}
	var vString = "linear-gradient(" + _degree + "deg, " + 
	_c1.value + "," + 
	_c2.value + "," + 
	_c3.value + "," + 
	_c4.value + "," + 
	_c5.value + "," + 
	_c6.value + "," + 
	_c7.value +
	")";
	_body.style.background = vString;
	_css.textContent = _body.style.background;
}

_c1.addEventListener("input", setGradient);
_c2.addEventListener("input", setGradient);
_c3.addEventListener("input", setGradient);
_c4.addEventListener("input", setGradient);
_c5.addEventListener("input", setGradient);
_c6.addEventListener("input", setGradient);
_c7.addEventListener("input", setGradient);

_rotate.addEventListener("click", rotateGradient);
_spin.addEventListener("click", spinIt);
_newSpin.addEventListener("click", run(200,360));
