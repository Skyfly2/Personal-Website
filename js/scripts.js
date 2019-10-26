function responsiveNavBar(){
	var x = document.getElementByID("nav");
	if(x.className === "w3-top"){
		x.className += " responsive";
	}
	else{
		x.className = "w3-top";
	}
}