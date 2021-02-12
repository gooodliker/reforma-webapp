$(document).ready(function() {

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
    
    if ($(".item-wrap:nth-child(odd):last-child")) {
        $(".item-wrap:nth-child(odd):last-child").removeClass("col-md-6");
        $(".item-wrap:nth-child(odd):last-child").addClass("col-md-12");
        $(".item-wrap:nth-child(odd):last-child").removeClass("col-sm-6");
        $(".item-wrap:nth-child(odd):last-child").addClass("col-sm-12");
    }
    
    
    
    
    $('#inline-popups').magnificPopup({
      delegate: 'a',
      removalDelay: 500, 
      callbacks: {
        beforeOpen: function() {
           this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      midClick: true 
    });
    
    
    
    
    if ($(window).width() >= 1200) {
        $('#anim-block1').css('opacity', 0);
        $('#anim-block2').css('opacity', 0);
        $('#anim-block3').css('opacity', 0);
        $('#anim-block4').css('opacity', 0);
        $('#anim-block5').css('opacity', 0);
        $('#anim-block6').css('opacity', 0);

        $('#anim-block1').waypoint(function() {
            $('#anim-block1').addClass('animated fadeInLeft');
        }, { offset: '50%' });
        $('#anim-block3').waypoint(function() {
            $('#anim-block3').addClass('animated fadeInLeft');
        }, { offset: '50%' });
        $('#anim-block5').waypoint(function() {
            $('#anim-block5').addClass('animated fadeInLeft');
        }, { offset: '50%' });
        $('#anim-block2').waypoint(function() {
            $('#anim-block2').addClass('animated fadeInUp');
        }, { offset: '50%' });
        $('#anim-block4').waypoint(function() {
            $('#anim-block4').addClass('animated fadeInUp');
        }, { offset: '50%' });
        $('#anim-block6').waypoint(function() {
            $('#anim-block6').addClass('animated fadeInUp');
        }, { offset: '50%' });
    }
    
    
    
});