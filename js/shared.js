var Header = new function() {


	this.header = document.getElementById("header");

	this.header.innerHTML = '<ul id="nav">' +
			'<l><a href="index.html" class = "home">Ryan Eyles</a></l> ' +
			'<l><a href="about.html" class="pages">About</a></l> ' +
			'<l><a href="project.html" class="pages">Project</a></l> ' +
			'<l><a href="portfolio.html" class="pages">Portfolio</a></l> '+
			'<l><a href="reflection.html" class="pages">Reflection</a></l> '+
		'</ul>';

}
