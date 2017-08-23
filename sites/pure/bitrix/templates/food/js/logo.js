$(function(){
	var $logo = $('#transforming-logo'),
		topOffset = $logo.offset().top,
		t0 = 162,
		t1 = 242,
		t2 = 336,
		t3 = 444,
		t4 = 707
	function LogoView(){
		var scrollTop = $(window).scrollTop() - topOffset
		if(scrollTop<t0){
			$logo.attr('class', '')
		}else if(scrollTop>=t0&&scrollTop<t1){
			$logo.attr('class', 't0')
		}else if(scrollTop>=t1&&scrollTop<t2){
			$logo.attr('class', 't1')
		}else if(scrollTop>=t2&&scrollTop<t3){
			$logo.attr('class', 't2')
		}else if(scrollTop>=t3&&scrollTop<t4){
			$logo.attr('class', 't3')			
			$('.frontend-clouds').css('background', 'transparent url(bitrix/templates/food/components/bitrix/catalog.section.list/mainMenu/images/frontend-clouds.png) no-repeat');
			$('.biker').css('display', 'block');
			$('.middle-submenu').css('display', 'block');
			$('.catalog-light').hide();
			$('.catalog-light').css('position', 'inherit');			
		}else if(scrollTop>=t4){
			$logo.attr('class', 't4');			
			$('.frontend-clouds').css('background', '#fff');
			$('.middle-submenu').css('display', 'none');
			$('.biker').css('display', 'none');
			$('.catalog-light').show();			
			$('.catalog-light').css('position', 'fixed');
		}
	}
	$(window).scroll(LogoView)
	LogoView()
})