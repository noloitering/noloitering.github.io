function showSideBar() {
	$(".sidePanel").slideDown(1500);
	if ($(".sidePanel").css("opacity") == 0.1) {
		$(".section").css("transform","translate(-8%,0)");
	}
	else {
		$(".section").css("transform","translate(0,0)");
	}
}
		
function hideSideBar() {
	$(".sidePanel").hide();
	$(".section").css("transform","translate(11%,0)");
}

function hoverAnimStart(animateObj) {
	animateObj.css("padding-right", 20);
	window.setTimeout( function() {
		animateObj.css("padding-right", 0);
	}, 800);
}

function sideBarMain() {
	if ($(window).width() > 1000) {
		showSideBar();
		$(".navbar").css("position", "relative");
	}
			
	$(window).resize(function() {
		if ($(window).width() < 1000) {
			hideSideBar();
			$(".navbar").css("position", "sticky");
		}
		else {
			showSideBar();
			$(".navbar").css("position", "relative");
		}
	});
			
	$(".slideOut").on('click', function () {
		var sidePanel = $(this).parent();
		var sections = sidePanel.parent().find(".section");
		var innerText = $(this).text().trim();
		
		// Resize padding
		$(this).css("top", "calc(50% - 80px)");
		$(this).css("padding-top", "0");
		$(this).css("padding-bottom", "0");
		// Slide away
		if (innerText == "«") {
			sidePanel.find(".slideOut").text("»");
			sidePanel.animate({width: "13%"}, 500, function () {
				sidePanel.css("transform","translate(-80%,0)");
				sections.css("transform","translate(-8%,0)");
				sidePanel.css("opacity",0.1);
				sidePanel.css("font-size", "0px");
			});
		};
		// Slide in
		if (innerText == "»") {
			//$(this).css("top", "80px");
			sidePanel.find(".slideOut").text("«")
			sidePanel.animate({opacity: 1, width: "36%"}, 750);
			sidePanel.css("transform","translate(0,0)");
			sidePanel.css("font-size","32px");
			sections.css("transform","translate(0,0)");
		};
	});
	
	$('.slideOut').hover(function(){
		var slideButton = $(this);
		hoverAnimStart(slideButton);
		hoverInterval = window.setInterval(function() { hoverAnimStart(slideButton); }, 2500);
	}, function(){
		clearInterval(hoverInterval);
    });
	
	$(".sidePanel li").on('click', function () {
		$(".sidePanel").find("li.active").removeClass("active");
		$(this).addClass("active");
	});
}