document.documentElement.className = 'js';
    $('.menu').css('z-index','100');
    $('.menu').css('opacity','1');

(function() {
			var navEl = document.querySelector('nav.menu'),
                butOn = document.querySelector('a.btn'),
				revealer = new RevealFx(navEl),
				closeCtrl = navEl.querySelector('.btn--close');

			document.querySelector('.btn--menu').addEventListener('click', function() {
                
				revealer.reveal({
					bgcolor: '#7E2120',
					duration: 250, 
					easing: 'easeInOutCubic',
					onCover: function(contentEl, revealerEl) {
                        
						navEl.classList.add('menu--open');
						contentEl.style.opacity = 0.95;
					},
					onComplete: function() {
						closeCtrl.addEventListener('click', closeMenu);
                        $('.menu').css('box-shadow','0px 0px 7px 1px rgba(0,0,0,0.75)');
                        
                        $('.menu').css('-webkit-box-shadow','0px 0px 7px 1px rgba(0,0,0,0.75)');
                        
                        $('.menu').css('-moz-box-shadow','0px 0px 7px 1px rgba(0,0,0,0.75)');
                        
                        $('.target-burger').addClass('toggled');
                        $('.btn--close').css('z-index','100');
                        $('.btn--menu').css('z-index','99');
					}
				});
			});

			function closeMenu() {
				closeCtrl.removeEventListener('click', closeMenu);
                $('.menu').css('box-shadow','0px 0px 7px 1px rgba(0,0,0,0)');
                        
                $('.menu').css('-webkit-box-shadow','0px 0px 7px 1px rgba(0,0,0,0)');
                        
                $('.menu').css('-moz-box-shadow','0px 0px 7px 1px rgba(0,0,0,0)');
                $('.target-burger').removeClass('toggled');
                $('.btn--menu').css('z-index','100');
                $('.btn--close').css('z-index','99');
				navEl.classList.remove('menu--open');
				revealer.reveal({
					bgcolor: '#1c1c1c',
					duration: 400, 
					easing: 'easeInOutCubic',
					onCover: function(contentEl, revealerEl) {
						navEl.classList.remove('menu--open');
						contentEl.style.opacity = 0;
					}
                    
				});
			}
    
            $(".menu__inner a").click(function(){
               closeMenu(); 
            });
		})();