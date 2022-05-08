(function($) { "use strict";


	//Hero parallax & fade on scroll	
	
	function scrollBanner() {
		$(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
			$('.parallax-fade-hero').css({
				'top' : (scrollPos/2)+'px',
				'opacity' : 1-(scrollPos/700)
			});
			$('.parallax-fade-hero-2').css({
				'top' : (scrollPos/1.6)+'px',
				'opacity' : 1-(scrollPos/700)
			});
			$('.parallax-hero').css({
				'top' : (scrollPos/2.2)+'px'
			});
			$('.parallax-fade-hero-short').css({
				'top' : (scrollPos/2)+'px',
				'opacity' : 1-(scrollPos/350)
			});
			$('.fade-hero').css({
				'opacity' : 1-(scrollPos/700)
			});
			$('.fade-hero-short').css({
				'opacity' : 1-(scrollPos/350)
			});
			$('.fade-hero-shorter').css({
				'opacity' : 1-(scrollPos/150)
			});
		});  
		if ($(window).width() > 1200) {
			$(document).on('scroll', function(){
			var scrollPos = $(this).scrollTop();
				$('.parallax-hero-1200').css({
					'top' : (scrollPos/2)+'px'
				});
			}); 
		}  
	}
	scrollBanner();		
	
	
	/* Parallax effect */
	
	if ($(window).width() > 1199) {
		$().enllax();
	}
	

	//Loading page animation

	$(".animsition").animsition({
		inClass: 'fade-in-down-sm',
		outClass: 'fade-out-down-sm',
		inDuration: 400,
		outDuration: 400,
		linkElement: '.animsition-link',
		// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		unSupportCss: ['animation-duration',
		  '-webkit-animation-duration',
		  '-o-animation-duration'
		],
		//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

		overlay: false,

		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body'
	});
	
	
	/* Menu On Hover */
		
	$('body').on('mouseenter mouseleave','.dropdown',function(e){
		if ($(window).width() > 1199) {
			var _d=$(e.target).closest('.dropdown');_d.addClass('show');
			setTimeout(function(){
			_d[_d.is(':hover')?'addClass':'removeClass']('show');
			},1);
		}
	});
	$('body').on('mouseenter mouseleave','.dropdown-2',function(e){
		if ($(window).width() > 1199) {
			var _d=$(e.target).closest('.dropdown-2');_d.addClass('show');
			setTimeout(function(){
			_d[_d.is(':hover')?'addClass':'removeClass']('show');
			},1);
		}
	});
	if ($(window).width() < 1200) {
		$( document ).ready( function () {
			$( '.dropdown-menu a.dropdown-sub' ).on( 'click', function ( e ) {
				var $el = $( this );
				var $parent = $( this ).offsetParent( ".dropdown-menu" );
				if ( !$( this ).next().hasClass( 'show' ) ) {
					$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
				}
				var $subMenu = $( this ).next( ".dropdown-menu" );
				$subMenu.toggleClass( 'show' );
				
				$( this ).parent( "li" ).toggleClass( 'show' );

				$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
					$( '.dropdown-menu .show' ).removeClass( "show" );
				} );
				
				 if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
					$el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
				}

				return false;
			} );
		} );
	}
	

	/* Page scroll to id */
    
	$(window).load(function(){"use strict";
		
		/* Page Scroll to id fn call */
		$(".home-side-nav a.btn-user-profile,.navbar a.link,.one-page-nav a.nav-link,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"a.link, .one-page-nav a.nav-link, .home-side-nav a.btn-user-profile",
			offset: 70,
			scrollSpeed: 800,
			scrollEasing: "easeInOutCubic"
		});
		
		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		if ($(window).width() < 1200) {
			$(".navbar a.link,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
				offset: -30,
			});
		}
	
		//Animation after load
		
		$('body.triger-anime').removeClass('triger-anime');		
		
	});
	

	/* One page nav close on click */

    $('.one-page-nav .navbar-collapse a').on('click', function () {
		$(".one-page-nav .navbar-collapse").collapse('hide');
    }); 

	
	// Contact form submit
	
	$('.send-contact-message').on('click', function() {
		var data = {
			fullname: $('#contactname').val(),
			email: $('#contactemail').val(),
			subject: $('input[name="subject"]:checked').val(),
			message: $('#contactmessage').val(),
		};

		$.post({
			url: 'contact.php',
			data: data,
			success: function(data) {
				$('#contact-message-feedback')
					.text(data.message)
					.removeClass()
					.addClass(data.status);
			},
			error: function(xhr, errorText) {
				$('#contact-message-feedback')
					.text(errorText)
					.removeClass()
					.addClass('error');
			},
		});
	});


	/* Input file */
    
    $("[type=file]").on("change", function(){
      var file = this.files[0].name;
      var dflt = $(this).attr("placeholder");
      if($(this).val()!=""){
        $(this).next().text(file);
      } else {
        $(this).next().text(dflt);
      }
    }); 


	//Button hover effect

	$('.btn-text-slide').html((i, html) => {
		return '<span><i>' + $.trim(html).split('').join('</i><i>') + '</i></span>';
	}); 
	
	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();
	
	
	/* Modals on loads */
	
	setTimeout(function() {
		$('#modalOnload-1').modal();
		$('#modalOnload-2').modal();
		$('#modalOnload-3').modal();
	}, 800);
	
	
	/* Swiper testimonials */
	
    var swiper = new Swiper('.swiper-testimonials', {
		slidesPerView: '1',
		spaceBetween: 20,
		speed: 400,  
		mousewheel: false,
		freeMode: false,
		grabCursor: false,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }		
    });	
	
	/* Swiper testimonials 2 */
	
    var swiper = new Swiper('.swiper-testimonials-2', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		effect: `coverflow`,
		coverflowEffect: {
			rotate: 10,
			slideShadows: false,
			depth: 220,
		},
		breakpoints: {
			991: {
				slidesPerView: 3
			}
		},
    });
	
	/* Swiper testimonials 3 */
	
    var swiper = new Swiper('.swiper-testimonials-3', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		effect: `coverflow`,
		coverflowEffect: {
			rotate: 15,
			slideShadows: false,
			depth: 160,
		},
		breakpoints: {
			991: {
				slidesPerView: 3
			}
		},
    });
	
	/* Swiper testimonials 4 */
	
    var swiper = new Swiper('.swiper-testimonials-4', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			991: {
				slidesPerView: 3,
				centeredSlides: true,
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper testimonials 5 */
	
    var swiper = new Swiper('.swiper-testimonials-5', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
				centeredSlides: true,
			},
			1199: {
				slidesPerView: 3,
				centeredSlides: true,
			}
		},
    });
	
	/* Swiper testimonials 6 */
	
    var swiper = new Swiper('.swiper-testimonials-6', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		breakpoints: {
			767: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			991: {
				slidesPerView: 3,
				centeredSlides: true,
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper processes */

    var galleryThumbs = new Swiper('.swiper-process-1-thumbs', {
		spaceBetween: 30,
		slidesPerView: '2',
		centeredSlides: false,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		loop: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			575: {
				slidesPerView: 3,
				centeredSlides: false,
				spaceBetween: 30,
				loop: false,
			}
		},
    });
    var galleryTop = new Swiper('.swiper-process-1', {
		slidesPerView: '1',
		spaceBetween: 30,
		speed: 500, 
		loop: false,
		parallax: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		thumbs: {
			swiper: galleryThumbs
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
    });
	
	/* Swiper startup */
	
    var swiper = new Swiper('.swiper-startup', {
		slidesPerView: '1',
		spaceBetween: 50,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
				spaceBetween: 30,
				centeredSlides: false,
				loop: false,
			},
			767: {
				slidesPerView: 3,
				spaceBetween: 30,
				centeredSlides: false,
				loop: false,
			},
			991: {
				slidesPerView: 'auto',
				spaceBetween: 50,
				centeredSlides: true,
				loop: true,
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		}
    });	
	
	/* Swiper blog 1 */
	
    var swiper = new Swiper('.swiper-blog-1', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			991: {
				slidesPerView: 3,
				centeredSlides: true,
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper home blog v2 */
	
    var swiper = new Swiper('.swiper-home-blog-v2', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		parallax: true,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
    });
	
	/* Swiper home blog v3 */
	
    var swiper = new Swiper('.swiper-home-blog-v3', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		parallax: true,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
			}
		}
    });
	
	/* Swiper home portfolio v2 */
	
    var swiper = new Swiper('.swiper-home-portfolio-v2', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		parallax: true,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
			}
		}
    });
	
	/* Swiper team */
	
    var swiper = new Swiper('.swiper-team', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			575: {
				slidesPerView: 1,
				loop: false,
			},
			767: {
				slidesPerView: 1,
				loop: false,
			},
			991: {
				slidesPerView: 3,
				loop: true,
			}
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `coverflow`,
		coverflowEffect: {
			rotate: 10,
			slideShadows: false,
			depth: 220,
		},
    });
	
	/* Swiper team 2 */
	
    var swiper = new Swiper('.swiper-team-2', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
				loop: false,
			},
			991: {
				slidesPerView: 3,
				loop: false,
			},
			1199: {
				slidesPerView: 4,
				loop: true,
			}
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper hero creative v2 */
	
    var swiper = new Swiper('.swiper-hero-creative-v2', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 700,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 6000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
    });
	
	/* Swiper hero creative v3 */
	
    var swiper = new Swiper('.swiper-hero-creative-v3', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 800,  
		grabCursor: false,
		loop: false,
		freeMode: false,
		mousewheel: true,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		parallax: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true,
			dragSize: '19',
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
	
	/* Swiper hero creative v4 */
	
    var swiper = new Swiper('.swiper-hero-creative-v4', {
		slidesPerView: 'auto',
		resistance: true,
		spaceBetween: 0,
		centeredSlides: false,
		speed: 800,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		mousewheel: true,
		touchStartPreventDefault: false,
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
	
	/* Swiper hero corporate v1 */
	
    var swiper = new Swiper('.swiper-hero-corporate-v1', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 800,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		mousewheel: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		parallax: true,
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
	
	/* Swiper hero corporate v2 */
	
    var swiper = new Swiper('.swiper-hero-corporate-v2', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 800,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		mousewheel: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		parallax: true,
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
    });
	
	/* Swiper hero design studio */
	
    var swiper = new Swiper('.swiper-hero-design-studio', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 700,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
	
	/* Swiper hero branding */
	
    var swiper = new Swiper('.swiper-hero-branding', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 700,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		}
    });
	
	/* Swiper hero portfolio v3 */
	
    var swiper = new Swiper('.swiper-hero-portfolio-v3', {
		slidesPerView: 'auto',
		resistance: true,
		spaceBetween: 30,
		centeredSlides: true,
		speed: 800,  
		grabCursor: false,
		loop: false,
		freeMode: true,
		mousewheel: true,
		touchStartPreventDefault: false,
		parallax: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			991: {
				spaceBetween: 50,
				centeredSlides: false,
			}
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true,
			dragSize: '50',
		}
    });
	
	/* Swiper hero shop v1 */
	
    var swiper = new Swiper('.swiper-hero-shop-v1', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 800,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		mousewheel: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		parallax: true,
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
	
	/* Swiper hero shop v2 */
	
    var swiper = new Swiper('.swiper-hero-shop-v2', {
		slidesPerView: '1',
		spaceBetween: 0,
		centeredSlides: false,
		speed: 800,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		mousewheel: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		parallax: true,
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
	
	/* Swiper shop */
	
    var swiper = new Swiper('.swiper-shop', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		breakpoints: {
			575: {
				slidesPerView: 2,
				centeredSlides: true,
			},
			991: {
				slidesPerView: 3,
				centeredSlides: true,
			},
			1299: {
				slidesPerView: 4,
				centeredSlides: true,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
    });
	
	/* Swiper services */
	
    var swiper = new Swiper('.swiper-services', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		parallax: true,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
    });
	
	/* Swiper logos */
	
    var swiper = new Swiper('.swiper-logos', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		freeMode: false,
		touchStartPreventDefault: false,
		breakpoints: {
			575: {
				slidesPerView: 1,
				loop: false,
			},
			767: {
				slidesPerView: 2,
				loop: false,
			},
			991: {
				slidesPerView: 3,
				loop: false,
			},
			1199: {
				slidesPerView: 4,
				loop: true,
			}
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper logos 2 */
	
    var swiper = new Swiper('.swiper-logos-2', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		freeMode: false,
		touchStartPreventDefault: false,
		breakpoints: {
			575: {
				slidesPerView: 1,
				loop: false,
			},
			767: {
				slidesPerView: 2,
				loop: false,
			},
			991: {
				slidesPerView: 3,
				loop: false,
			},
			1199: {
				slidesPerView: 4,
				loop: true,
			},
			1299: {
				slidesPerView: 5,
				loop: true,
			},
			1499: {
				slidesPerView: 6,
				loop: true,
			},
			1699: {
				slidesPerView: 7,
				loop: true,
			}
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper logos 3 */
	
    var swiper = new Swiper('.swiper-logos-3', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		freeMode: false,
		touchStartPreventDefault: false,
		breakpoints: {
			575: {
				slidesPerView: 1,
				loop: false,
			},
			767: {
				slidesPerView: 2,
				loop: false,
			},
			991: {
				slidesPerView: 3,
				loop: false,
			},
			1199: {
				slidesPerView: 4,
				loop: true,
			},
			1399: {
				slidesPerView: 5,
				loop: true,
			},
			1599: {
				slidesPerView: 6,
				loop: true,
			}
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper niche 1 */
	
    var swiper = new Swiper('.swiper-niche-1', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper bakery */

    var galleryThumbs = new Swiper('.swiper-bakery-thumbs', {
		spaceBetween: 30,
		slidesPerView: '4',
		centeredSlides: false,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		loop: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		direction: 'horizontal',
		breakpoints: {
			576: {
				slidesPerView: 4,
				centeredSlides: false,
				spaceBetween: 30,
				direction: 'horizontal',
			},
			992: {
				slidesPerView: 4,
				centeredSlides: false,
				spaceBetween: 30,
				direction: 'vertical',
			}
		}
    });
    var galleryTop = new Swiper('.swiper-bakery', {
		slidesPerView: '1',
		spaceBetween: 0,
		speed: 500, 
		loop: true,
		parallax: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		thumbs: {
			swiper: galleryThumbs
		},
		mousewheel: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		}
    });
	
	/* Swiper portfolio widget */
	
    var swiper = new Swiper('.swiper-portfolio-widget', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper product widget */
	
    var swiper = new Swiper('.swiper-product-widget', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper hotel gallery */
	
    var swiper = new Swiper('.swiper-hotel', {
		slidesPerView: '2',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: true,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		freeMode: false,
		touchStartPreventDefault: false,
		breakpoints: {
			575: {
				slidesPerView: 3,
				loop: false,
			},
			767: {
				slidesPerView: 4,
				loop: false,
			},
			1199: {
				slidesPerView: 5,
				loop: true,
			},
			1399: {
				slidesPerView: 6,
				loop: true,
			},
			2000: {
				slidesPerView: 8,
				loop: true,
			}
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		}
    });
	
	/* Swiper landing v2 */
	
    var swiper = new Swiper('.swiper-landing-v2', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
    });
	
	/* Swiper landing services */
	
    var swiper = new Swiper('.swiper-landing-services', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 4,
			}
		},
    });
	
	/* Swiper Portfolio Slider In Column */
	
    var swiper = new Swiper('.swiper-portfolio-slider-in', {
		slidesPerView: '1',
		spaceBetween: 0,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		parallax: true,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
    });
	
	/* Swiper project page v5 */
	
    var swiper = new Swiper('.swiper-project-page-v5', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			}
		},
    });
	
	/* Swiper project page v6 */
	
    var swiper = new Swiper('.swiper-project-page-v6', {
		slidesPerView: '1',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,  
		grabCursor: false,
		loop: true,
		freeMode: false,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
			}
		},
    });
	
	/* Swiper product page */

    var galleryThumbs = new Swiper('.swiper-product-page-thumbs', {
		spaceBetween: 5,
		slidesPerView: '3',
		centeredSlides: false,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		loop: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.swiper-product-page', {
		slidesPerView: '1',
		spaceBetween: 0,
		speed: 500, 
		loop: true,
		thumbs: {
			swiper: galleryThumbs
		},
		mousewheel: false,
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		}
    });
	
	
	/* Pricing startup page */
		
	$(".pricing-opt").on('click', function () {
		if ($("body").hasClass("pricing-opt-body-2")) {
			$("body").removeClass("pricing-opt-body-2");
		}
		else {
			$("body").addClass("pricing-opt-body-2");
		}
	});
	

	/* Blog filters */

	$(function(){
		$('.blog-mix-wrapper').mixItUp( {
			load: {
				filter: '.all'
			},
			selectors: {
				target: '.blog-mix-wrap'
			},
			animation: {
				duration: 700
			}
		});	
	});	
	$(function(){
		$('.blog-mix-wrapper-1').mixItUp( {
			selectors: {
				target: '.blog-mix-wrap-1'
			},
			animation: {
				duration: 700
			}
		});	
	});
	

	/* Shop filters */

	$(function(){
		$('.shop-mix-wrapper-1').mixItUp( {
			selectors: {
				target: '.shop-mix-wrap-1'
			},
			animation: {
				duration: 700
			}
		});	
	});
	
	
	//parallax hover tilt effect	
	
	$('.js-tilt').tilt({
		maxGlare: false
	})
		
		
	//Input number
	
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.on('click', function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.on('click', function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
		
		
	//Log in - register form change
	
	$('.form-type a').on('click', function(){
		$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	});
	
	
	$(document).ready(function(){"use strict";
		
		
		//Date Picker
		
		var dateSelect     = $('#flight-datepicker-1');
		var dateDepart     = $('#start-date-1');
		var dateReturn     = $('#end-date-1');
		var spanDepart     = $('.date-depart');
		var spanReturn     = $('.date-return');
		var spanDateFormat = 'ddd, MMMM D yyyy';

		dateSelect.datepicker({
			autoclose: true,
			format: "dd.M",
			maxViewMode: 0,
			startDate: "now"
		});


        /* Progress bar animation on scroll */
	
		$('.progress-bar').waypoint(function() {
			$('.progress-bar').css({
				animation: "animate-positive 2.5s",
				opacity: "1"
			});
		}, { offset: '75%' });


        /* Counter Up */

        $('.counter').counterUp({
            delay: 50,
            time: 2500
        });


        /* Tooltips */
		
		$('.tooltip-top').tooltipster({
			side: 'top',
			contentCloning: true,
			animation: 'fade',
			delay: [0],
			distance: [20]
		});
		$('.tooltip-bottom').tooltipster({
			side: 'bottom',
			contentCloning: true,
			animation: 'fade',
			delay: [0],
			distance: [20]
		});
		$('.tooltip-right').tooltipster({
			side: 'right',
			contentCloning: true,
			animation: 'fade',
			delay: [0],
			distance: [20]
		});
		$('.tooltip-left').tooltipster({
			side: 'left',
			contentCloning: true,
			animation: 'fade',
			delay: [0],
			distance: [20]
		});


        /* Sticky */
        
		if ($(window).width() > 991) {
            $("#sticker").stick_in_parent({offset_top: 0});
            $("#sticker-project").stick_in_parent({offset_top: 100});
		}
		if ($(window).width() > 1199) {
            $("#sticker-careers").stick_in_parent({offset_top: 100});
            $("#sticker-blog-1-col").stick_in_parent({offset_top: 40});
            $("#sticker-home").stick_in_parent({offset_top: 172});
            $("#sticker-home-2nd-nav").stick_in_parent({offset_top: 76});
		}

		
		//Nice Select
		
		$('.select-style').niceSelect();
		
		
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 350;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
		/* Video */
		
		$(".container").fitVids();
						
		$('.vimeo a,.youtube a').on('click', function (e) {
			e.preventDefault();
			var videoLink = $(this).attr('href');
			var classeV = $(this).parent();
			var PlaceV = $(this).parent();
			if ($(this).parent().hasClass('youtube')) {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
			} else {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=212121" width="500" height="281" frameborder="0"></iframe>');
			}
		});	
		

		/* Hide modal on filter sorting */
		
		$('.filter-sorting a.btn-filter-tag').on('click', function () { 
			$('#modalFilters').modal('hide');
			$.mPageScroll2id("scrollTo","#page-section");
		});	
		

		/* Portfolio Sorting */

		(function ($) { 		
			var container = $('.filter-wrapper-mix');						
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;					
				return columnNumb;
			}						
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}			
			$('.filter-sorting button, .filter-sorting a').on('click', function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('button, a').removeClass('active');
				$(this).addClass('active');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);								
				return false;
			});			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}						
			container.imagesLoaded(function () { 
				setColumnWidth();								
				container.isotope( { 
					itemSelector : '.mix', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );													
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();				
			} );					
		} )(jQuery);
		
		
	});
	
 
	/* DebouncedResize Function */
	
	(function ($) { 
		var $event = $.event, 
			$special, 
			resizeTimeout;				
		$special = $event.special.debouncedresize = { 
			setup : function () { 
				$(this).on('resize', $special.handler);
			}, 
			teardown : function () { 
				$(this).off('resize', $special.handler);
			}, 
			handler : function (event, execAsap) { 
				var context = this, 
					args = arguments, 
					dispatch = function () { 
						event.type = 'debouncedresize';
						
						$event.dispatch.apply(context, args);
					};								
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}								
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			}, 
			threshold : 150 
		};
	} )(jQuery);
	
	
    
    
})(jQuery); 