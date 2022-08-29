$(function(){
 $('.reviews-sliders').slick({
   centerMode: true,
   dots: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow: $('.reviews-arrow__prev'),
   nextArrow: $('.reviews-arrow__next'),
	  responsive: [
					{
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
     },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
     }
	    ]
	});
  // slider reviews
})