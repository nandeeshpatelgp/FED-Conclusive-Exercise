"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null
		},
		init:function(){
			this.bindEvents();
			//ADD INITIALIZER CODE HERE
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
		},
		next:function(){
			/*
			*	This function removes the active class from current slide and sets the active class to next slide if present or to the first slide.
			*/
			var current = $(".carousel-cells .active")[0];
			var firstSlide = $(".carousel-cells article")[0];
			current.className = "";
			if(current.nextElementSibling){
				current.nextElementSibling.className = "active"
			}else {
				firstSlide.className = "active";
			}
		},
		previous:function(){
			/*
			*	This function removes the active class from current slide and sets the active class to previous slide if present or to the last slide.
			*/
			var current = $(".carousel-cells .active")[0];
			var lastSlide = $(".carousel-cells article");
			lastSlide = lastSlide[lastSlide.length - 1];
			current.className = "";
			if(current.previousElementSibling){
				current.previousElementSibling.className = "active"
			}else {
				lastSlide.className = "active";
			}
		},
		update:function(){
			//ADD UPDATE CODE HERE
		}
	}
	$(function(){
		Carousel.init();
		/*
		*	This function handles the navigation of the slides when user clicks on the navigation bar on top right corner of the page.
		*/
		document.getElementsByTagName("nav")[0].addEventListener("click",function(event){
			if(event.target.tagName.toLowerCase() === "li"){
				var index = parseInt(event.target.getAttribute("data-index"));
				var target = $(".carousel-cells article")[index];
				document.getElementsByClassName("active")[0].className = "";
				target.className = "active";
			}
		});
	})
})(window);