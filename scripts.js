function color1() {
	if (document.getElementById('bt1').className =="bt1") {
	document.getElementById('bt1').className = "bt2";
	document.getElementsByClassName('col-left')[0].className = "col-left-oscura";
	document.getElementsByClassName('col-right')[0].className = "col-right-oscura";
	document.getElementsByClassName('content')[0].className = "content-oscura";
	}
	else
	{
	document.getElementById('bt1').className = "bt1"
	document.getElementsByClassName('col-left-oscura')[0].className = "col-left";
	document.getElementsByClassName('col-right-oscura')[0].className = "col-right";
	document.getElementsByClassName('content-oscura')[0].className = "content";
	}
}