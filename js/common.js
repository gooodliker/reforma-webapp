$(document).ready(function() {

	function heightDetect() {
	   $(".head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
	   heightDetect();
	});
    
    
    //TO TOP BUTTON
    
//    var offset = 300,
//		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
//		offset_opacity = 1200,
//		//duration of the top scrolling animation (in ms)
//		scroll_top_duration = 700,
//		//grab the "back to top" link
//		$back_to_top = $('.cd-top');
//
//	//hide or show the "back to top" link
//	$(window).scroll(function(){
//		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
//		if( $(this).scrollTop() > offset_opacity ) { 
//			$back_to_top.addClass('cd-fade-out');
//		}
//	});
//
//	//smooth scroll to top
//	$back_to_top.on('click', function(event){
//		event.preventDefault();
//		$('body,html').animate({
//			scrollTop: 0 ,
//		 	}, scroll_top_duration
//		);
//	});
    
    $(".scroll").click(function(event){
        event.preventDefault();
        //calculate destination place
        var dest=0;
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
        dest=$(document).height()-$(window).height();
        }else{
        dest=$(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'easeOutQuart');
    });

    
    $(".plus-but").click(function(){
        if ($(".socials-wrap li").hasClass("fadeInUp")){
            $(".plus-but").css("transform","rotate(0deg)");
            $(".socials-wrap li").removeClass("fadeInUp");
            $(".socials-wrap li").addClass("fadeOutUp");
            $(".socials-wrap a").css("cursor","default");
//            function minipause() {
//                $(".socials-wrap li").css("visibility","hidden");
//            }
//            setTimeout(minipause, 1000);
               
        }
        else {
            $(".socials-wrap li").css("visibility","visible");
            $(".socials-wrap a").css("cursor","pointer");
            $(".plus-but").css("transform","rotate(45deg)");
            $(".socials-wrap li").removeClass("fadeOutUp");
            $(".socials-wrap li").addClass("fadeInUp");    
        }  
    });
    
    
    
    $('.loop').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:20,
        smartSpeed: 900,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            1025:{
                items:2,
                margin: 170
            }
        }
    });

    
});
