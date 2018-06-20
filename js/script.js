$(document).ready(function($) {

	/* Submenu for laptop and mobile */

	function mobileNav() {
		if ($(window).width() <= '1024') {
			$('.header__nav-item.sub').on('click', function(event) {
				var submenuHeader = $(this).find('.header__subnav');
				if (submenuHeader.hasClass('active')) {
					submenuHeader.removeClass('active');
				} else {
					submenuHeader.addClass('active');
				}
			});
		}
	}
	mobileNav();
	$(window).on('resize', function() {
		mobileNav();
	});

	/* Images for companies that TRUST US */

	for (var i=1; i < 26; i++) {
		$('.index__trust-wr').append(
			'<div class="index__work-img-wr">' 
			 + '<img src="./images/company-'+i+'.jpg" alt=""/>' 
			 + '</div>'
		);
	}

	/* Sliders for mobile */

	function reviewSlider() {
		$('.index__rewiew-wr').slick({
				dots: true,
				slidesToShow: 1
			});
	}
	function trustSlider() {
		$('.index__trust-wr').slick({
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
       					slidesToShow: 4
       				}
       			},
       			{
					breakpoint: 700,
					settings: {
       					slidesToShow: 3
       				}
       			},
       			{
					breakpoint: 450,
					settings: {
       					slidesToShow: 2
       				}
       			}	
       		]		
		});
	}
	function sliderFunction() {
		if ($(window).width() <= '450') {
			reviewSlider();
			$('.index__rewiew-wr').addClass('active');
		} 
		if ($(window).width() <= '1024') {
			trustSlider();
			$('.index__trust-wr').addClass('active');
		} 
	}
	sliderFunction();
	$(window).on('resize', function() {
		if ($(window).width() <= '450') {
			if ($('.index__rewiew-wr').hasClass('active')) {
				$('.index__rewiew-wr').slick('resize');
			} else {
				$('.index__rewiew-wr').addClass('active');
				reviewSlider();
			}
		} else {
			if ($('.index__rewiew-wr').hasClass('active')) {
				$('.index__rewiew-wr').removeClass('active');
				$('.index__rewiew-wr').slick('unslick');
			}
		}
		if ($(window).width() <= '1024') {
			if ($('.index__trust-wr').hasClass('active')) {
				$('.index__trust-wr').slick('resize');
			} else {
				$('.index__trust-wr').addClass('active');
				trustSlider();
			}
		} else {
			if ($('.index__trust-wr').hasClass('active')) {
				$('.index__trust-wr').removeClass('active');
				$('.index__trust-wr').slick('unslick');
			}
		}
		
	});
});