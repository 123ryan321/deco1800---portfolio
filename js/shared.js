// slider through images

var concept = {
	idx: 0,

	imgs: ["images/concept/login.jpg", 
			"images/concept/ingame.jpg", 
			"images/concept/question.jpg",
			"images/concept/leaderboard.jpg"],
	captions: ["&nbsp Login Page",
				"&nbsp Main Game Screen",
				"&nbsp Mini-Game Example",
				"&nbsp Leaderboard"],

	capID: "conceptSliderCap",

	curr: document.querySelector("#conceptImgs .currImg"),
	nxt:  document.querySelector("#conceptImgs .nxtImg"),

	update: function() {
		this.curr = document.querySelector("#conceptImgs .currImg");
		this.nxt =  document.querySelector("#conceptImgs .nxtImg");
	},
}


var finalPjt = {
	idx: 0,

	imgs: ["images/final/login.png", 
			"images/final/settings.png",
			"images/final/ingame.png", 
			"images/final/menu.png", 
			"images/final/question.png",
			"images/final/leaderboard.png"],
	captions: ["&nbsp Login Page",
				"&nbsp Settings",
				"&nbsp Main Game Screen",
				"&nbsp Menu",
				"&nbsp Mini-Game Example",
				"&nbsp Leaderboard"],

	capID: "finalSliderCap",

	curr: document.querySelector("#finalImgs .currImg"),
	nxt:  document.querySelector("#finalImgs .nxtImg"),

	update: function() {
		this.curr = document.querySelector("#finalImgs .currImg");
		this.nxt =  document.querySelector("#finalImgs .nxtImg");
	},
}

var port = {
	idx: 0,

	imgs: ["images/portfolio/home.png", 
			"images/portfolio/about.png",
			"images/portfolio/project.png", 
			"images/portfolio/slider.png", 
			"images/portfolio/backToTop.png"],
	captions: ["&nbsp Home Page",
				"&nbsp Sample Page",
				"&nbsp Project Section Example",
				"&nbsp Image Slider",
				"&nbsp Return to Top Graphic"],

	capID: "portSliderCap",

	curr: document.querySelector("#portImgs .currImg"),
	nxt:  document.querySelector("#portImgs .nxtImg"),

	update: function() {
		this.curr = document.querySelector("#portImgs .currImg");
		this.nxt =  document.querySelector("#portImgs .nxtImg");
	},
}


var slider = new function(slider) {

	// this.cIdx = 0;
	

	this.prev = function(slider) {

		//decrease Idx
		slider.idx --;

		if(slider.idx < 0 || isNaN(slider.idx)) {
			slider.idx = slider.imgs.length-1;
		}
		//change image

		this.change(slider);

	}

	this.next= function(slider){

		if(++slider.idx > slider.imgs.length-1) {
			slider.idx = 0;
		}
		console.log(slider);

		console.log(slider.idx);
		//change idx
		this.change(slider);


	}

	this.change = function(slider){
		//pdate next image
		slider.nxt.src = slider.imgs[slider.idx];
		document.getElementById(slider.capID).innerHTML = slider.captions[slider.idx];
		

		//fade out current image
		slider.curr.className = "nxtImg";
		
		//fade in next image
		slider.nxt.className = "currImg";

		slider.update();

	}

}




/***************************************************************/
/*-----------------------Back To Top--------------------------*/
/***************************************************************/

myID = document.getElementById("toTop");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 460) {
    myID.className = "bottomMenu show"
  } else {
    myID.className = "bottomMenu hide"
  }
};

window.addEventListener("scroll", myScrollFunc);