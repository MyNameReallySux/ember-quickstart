$(window).scroll(function(){
	let timeout = setTimeout(onScroll, 100)
});

function onScroll(){
	console.log("Scroll Stopped")
}

function setBackgroundImages(selector){
	let list = $(selector || document).find("*[data-background]");
	list.each(function(){
		let url = $(this).attr("data-background")
		$(this).css("background-image", `url(${url})`)
	})
}

function onRouteTransition(){
	setBackgroundImages(document)
	
	const selectors = [
		'#Quotes'
	]
	$(selectors.join(", ")).find(".owl-carousel").owlCarousel({
		items: 1,
		center: true,
		autoplay: true,
		loop: true,
	});
}

$(document).ready(function(){
	onRouteTransition()
})

