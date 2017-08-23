// При загрузке докумена
$(document).ready(function(){

	// Анимация поля поиска, иконки "корзина"
	cmn_navbarIcons();

	// Меняем цвет домиков
	cmn_shiftCatalogBG();

	// Движение облаков и байкера в каталоге
	cmn_animateCatalog();

	// Анимация велосипедиста
	cmn_bikerAnimation();

	// Поведение flat-radiobutton
	radiobuttonsBehaviour();

	// Поведение flat-radiobutton-simple
	simpleRadiobuttonsBehaviour();

});

// Дублируем закрытие поля поиска, когда JS не успевает и mouseout не срабатывает
var isSearchOpened = false;
document.onmousemove = function(e)
{

	if((e.toElement != document.querySelector('.mainmenu-icon-search') && e.toElement != document.querySelector('.mainmenu-search-field')) && isSearchOpened)
	{
		isSearchOpened = false;
		$('.mainmenu-search-field').animate({width: 30+'px', 'margin-left': '-52px'}, 200, function(){
			$('.mainmenu-search-field').hide();
			$('.mainmenu-icon-search').css('position', 'relative');
			$('.mainmenu-icon-key').css('margin-left', '0');
		});
	}

}

// Анимация поля поиска, иконки "корзина"
function cmn_navbarIcons () {

	$('.mainmenu-icon-search').on('mouseover', function(){
		isSearchOpened = true;
		$('.mainmenu-icon-search').css('position', 'absolute');
		$('.mainmenu-icon-key').css('margin-left', '38px');
		$('.mainmenu-search-field').show();
		$('.mainmenu-search-field').animate({width: 170+'px', 'margin-left': -192+'px'}, 200, function(){  });
	});


	$('.mainmenu-search-field').on('mouseout', function(e){
		if(e.relatedTarget != document.querySelector('.mainmenu-icon-search') ){
			$('.mainmenu-search-field').animate({width: 30+'px', 'margin-left': '-52px'}, 200, function(){
				$('.mainmenu-search-field').hide();
				$('.mainmenu-icon-search').css('position', 'relative');
				$('.mainmenu-icon-key').css('margin-left', '0');

			});
			isSearchOpened = false;
		}
	});


	// ОТПРАВЛЯЕМ POST ЗАПРОС ПОИСКА
	$('.mainmenu-icon-search').click(function(){
		$.ajax({
			url: '/search/',
			type: 'POST',
			data: {'searchQuery': $('.mainmenu-search-field').val()}
		});
	});

	$('.mainmenu-icon-cart').mouseover(function(){
		$('.mainmenu-icon-cart').children().css('color', '#5F859D');
	});

	$('.mainmenu-icon-cart').mouseout(function(){
		$('.mainmenu-icon-cart').children().css('color', '#666666');
	});
}

// Меняем цвет домиков(Сдвигаем фон каталога)
function cmn_shiftCatalogBG(){
	var defaultCatalogSectionClass  = document.querySelector('.catalog-sections').className;

/*	$('.milk').mouseover(function(){ $('.catalog-sections').css('background-position', '0 -198px'); });
	$('.milk').mouseout(function(){ $('.catalog-sections').css('background-position', '0 0'); });

	$('.meat').mouseover(function(){ $('.catalog-sections').css('background-position', '0 -396px'); });
	$('.meat').mouseout(function(){ $('.catalog-sections').css('background-position', '0 0'); });

	$('.fowl').mouseover(function(){ $('.catalog-sections').css('background-position', '0 -594px'); });
	$('.fowl').mouseout(function(){ $('.catalog-sections').css('background-position', '0 0'); });

	$('.cookery').mouseover(function(){ $('.catalog-sections').css('background-position', '0 -792px'); });
	$('.cookery').mouseout(function(){ $('.catalog-sections').css('background-position', '0 0'); });

	$('.fruit-vegetables').mouseover(function(){ $('.catalog-sections').css('background-position', '0 -990px'); });
	$('.fruit-vegetables').mouseout(function(){ $('.catalog-sections').css('background-position', '0 0'); });

	$('.grocery').mouseover(function(){ $('.catalog-sections').css('background-position', '0 -1188px'); });
	$('.grocery').mouseout(function(){ $('.catalog-sections').css('background-position', '0 0'); });

	$('.sets').mouseover(function(){ $('.catalog-sections').css('background-position', '0 -1386px'); });
	$('.sets').mouseout(function(){ $('.catalog-sections').css('background-position', '0 0'); });*/

	$('.milk').mouseover(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? 'catalog-sections milk-active cs-light' : 'catalog-sections milk-active' });
	$('.milk').mouseout(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? defaultCatalogSectionClass+' cs-light': defaultCatalogSectionClass; });

	$('.meat').mouseover(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? 'catalog-sections meat-active cs-light' : 'catalog-sections meat-active' });
	$('.meat').mouseout(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? defaultCatalogSectionClass+' cs-light': defaultCatalogSectionClass; });

	$('.fowl').mouseover(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? 'catalog-sections bird-active cs-light' : 'catalog-sections bird-active' });
	$('.fowl').mouseout(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? defaultCatalogSectionClass+' cs-light': defaultCatalogSectionClass; });

	$('.cookery').mouseover(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? 'catalog-sections cooking-active cs-light' : 'catalog-sections cooking-active' });
	$('.cookery').mouseout(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? defaultCatalogSectionClass+' cs-light': defaultCatalogSectionClass; });

	$('.fruit-vegetables').mouseover(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? 'catalog-sections fruit-active cs-light' : 'catalog-sections fruit-active' });
	$('.fruit-vegetables').mouseout(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? defaultCatalogSectionClass+' cs-light': defaultCatalogSectionClass; });

	$('.grocery').mouseover(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? 'catalog-sections grocery-active cs-light' : 'catalog-sections grocery-active' });
	$('.grocery').mouseout(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? defaultCatalogSectionClass+' cs-light': defaultCatalogSectionClass; });

	$('.sets').mouseover(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? 'catalog-sections sets-active cs-light' : 'catalog-sections sets-active' });
	$('.sets').mouseout(function(){ document.querySelector('.catalog-sections').className = $('.catalog-sections').hasClass('cs-light') ? defaultCatalogSectionClass+' cs-light': defaultCatalogSectionClass; });
}

// Движение облаков в каталоге
function cmn_animateCatalog(){

	// Движения облаков(задний фон)
	// Двигаем фон
	moveBG('.backend-clouds', 0.25, 'fromLeftToRight');

	// Раз в 25 секунд сбрасываем background-position-x
	setInterval(function(){
		document.querySelector('.backend-clouds').style.backgroundPosition = -1100+'px 0';
	}, 72000);

	// Движения облаков(передний фон)
	// Двигаем фон
	moveBG('.frontend-clouds', 0.5, 'fromLeftToRight');

	// Раз в 25 секунд сбрасываем background-position-x
	setInterval(function(){
		document.querySelector('.frontend-clouds').style.backgroundPosition = -950+'px 0';
	}, 58000);
}

// Анимация байкера
var bikerInterval,
	bikerPosX,
	bikerDirect = -1;
function cmn_bikerAnimation(){
	document.querySelector('.biker').style.backgroundPosition = '1120px 0';

	// Выбираем направление полета
	setInterval(function(){

		// Летим налево
		if(bikerDirect == 1){
			bikerDirect = -1;
			document.querySelector('.biker').style.backgroundImage = 'url(bitrix/templates/food/components/bitrix/catalog.section.list/mainMenu/images/biker.png)';
			document.querySelector('.biker').style.backgroundPosition = '1120px 0';
		}

		// Летим направо
		else{
			bikerDirect = 1;
			document.querySelector('.biker').style.backgroundImage = 'url(bitrix/templates/food/components/bitrix/catalog.section.list/mainMenu/images/biker2.png)';
			document.querySelector('.biker').style.backgroundPosition = '-65px 0';
		}
	}, 10000);

	bikerInterval = setInterval(function(){
		bikerPosX = document.querySelector('.biker').style.backgroundPosition.split(' ')[0].replace('px', '');

		//console.log(bikerPosX+'__'+bikerDirect);

		// Летим направо
		if( bikerDirect == 1 ){
			document.querySelector('.biker').style.backgroundPosition = Number(bikerPosX) + 0.9 + 'px 0';
		}

		// Летим налево
		else{
			document.querySelector('.biker').style.backgroundPosition = Number(bikerPosX) - 0.9 + 'px 0';
		}

	}, 0);
}

// Нужно для функции cmn_animateCatalog()
function moveBG(elementSelector, pixelsPerInteration, direction){
		var element = document.querySelector(elementSelector);

		if(direction == 'fromLeftToRight'){
			setInterval(function(){
				element.style.backgroundPosition = Number(element.style.backgroundPosition.split(' ')[0].replace('px', '')) + pixelsPerInteration +'px 0';
			}, 10);
		}else{
			setInterval(function(){
				element.style.backgroundPosition = Number(element.style.backgroundPosition.split(' ')[0].replace('px', '')) - pixelsPerInteration +'px 0';
			}, 10);
		}
}

// Показывает подменю, при клике на домике
var isSubmenuOpen = false;
function showSubmenu(arrowMarginLeft, submenuName, mb){
	// isSubmenuOpen = true;
	// $('header').animate({'margin-bottom': mb}, 200);
	//
	// $('.middle-submenu').children().css('display', 'none');
	//
	// $('.middle-submenu').show();
	// $('.middle-submenu-arrow').animate({'margin-left': arrowMarginLeft+'px'}, 200);
	// $('.middle-submenu-arrow').show();
	// $('.middle-submenu-'+submenuName).show();
	//
	// // Если домики уже схлопнулись
	// if($('.catalog-sections').hasClass('cs-light'))
	// {
	// 	// Если при этом еще есть меню 3-го уровня, то:
	// 	if($('.tabs-panel') != undefined && $('.tabs-panel').css('position') == 'fixed')
	// 		$('.tabs-panel').css('top', '152px');
	//
	// 	// Применяем стили из ../mainMenu/script.js
	// 	$('.middle-submenu').addClass('middle-submenu-light');
	// 	$('header').stop().animate({'margin-bottom':'275px'}, 200);
	// }
}

// Функция, для фиксирования меню 3-го уровня.
// scrollTop - это значение $(window).scrollTop(), при котором срабатывает фиксирование. По умолчанию = 128
function cmn_3LvlMenu(scrollTop){
	// if(scrollTop == undefined)
	// 	scrollTop = 128;
	//
	// $(window).scroll(function(){
	//
	// 	if($(window).scrollTop() >= scrollTop)
	// 	{
	// 		$('.tabs-panel').addClass('tabs-panel-fixed-top');
	// 		if(isSubmenuOpen)
	// 			$('.tabs-panel').css('top', '152px');
	// 	}
	// 	else
	// 		$('.tabs-panel').removeClass('tabs-panel-fixed-top');
	//
	// });
}

// Скрытие шапки для второстепенных страниц(на главной не используется!)
// mb - margin-bottom, который ставиться при загрузке страницы и после того, как шапка развернулась
// mb2 - margin-bottom, который ставиться, когда шапка свернута
function additionalPageHeaderAnimation(mb, mb2){
	if( mb == undefined) mb = '330px';
	if( mb2 == undefined) mb2 = '230px';

	// Скрытие шапки для второстепенных страниц
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){

			//$('.pagehead').css('margin-bottom', mb);
			$('.middle-submenu').removeClass('middle-submenu-light');

		}else{

			// Если подменю открыто, то добавляем класс
			if($('.middle-submenu-arrow').css('display') == 'block')
				$('.middle-submenu').addClass('middle-submenu-light');

			//$('.pagehead').css('margin-bottom', mb2);

		}
	});
}

// Поведение flat-radiobutton
function radiobuttonsBehaviour(){
	var radiobuttons,
	radiogroupElements,
	i, n;

	// После загрузки документа, ищем элемениы класса .flat-radiobutton-checked и показываем radiocontent у которых атрибут name равен атрибуту name у элементов класса
	radiobuttons = document.querySelectorAll('.flat-radiobutton-checked');
	for(i = 0; i < radiobuttons.length; i++){

		// Показываем radiocontent, у которого атриб. name, radiogroup совпабают с такими же атриб. у выбраного эелемента
		document.querySelector('[type=radiocontent][name='+radiobuttons[i].getAttribute('name')+'][radiogroup='+ radiobuttons[i].getAttribute('radiogroup')+']').style.display = 'block';
	}

	// Привязываем события ко всем radiobutton'ам
	radiobuttons = document.querySelectorAll('[type=radiobutton]');
	for(i = 0; i < radiobuttons.length; i++){
		radiobuttons[i].onclick = function(){

			// Скрываем все radiocontent и ставим всем flat-radiobutton, там где radiogroup равно radiogroup у текущего эелемента
			radiogroupElements = document.querySelectorAll('[radiogroup='+this.getAttribute('radiogroup')+']');

			for(n = 0; n < radiogroupElements.length; n++){
				// Если это type=radiobutton, то просто меняем класс на flat-radiobutton
				if(radiogroupElements[n].getAttribute('type') == 'radiobutton'){
					$(radiogroupElements[n]).removeClass('flat-radiobutton-checked');
					$(radiogroupElements[n]).addClass('flat-radiobutton');
				}

					//radiogroupElements[n].className = 'flat-radiobutton';

				// А если это type=radiocontent, то скрываем его
				else
					radiogroupElements[n].style.display = 'none';
			}

			// После, добавляем класс flat-radiobutton-checked к radiobutton и показываем его radiocontent
			$(this).removeClass('flat-radiobutton');
			$(this).addClass('flat-radiobutton-checked');
			document.querySelector('[type=radiocontent][name='+this.getAttribute('name')+'][radiogroup='+this.getAttribute('radiogroup')+']').style.display = 'block';
		};
	}
}

// Поведение flat-radiobutton-simple
function simpleRadiobuttonsBehaviour(){
	$('[type=radiobutton-simple]').click(function(){
		$('[type=radiobutton-simple][radiogroup='+$(this).attr('radiogroup')+']').removeClass('flat-radiobutton-simple-checked').addClass('flat-radiobutton-simple');
		$(this).removeClass('flat-radiobutton-simple').addClass('flat-radiobutton-simple-checked');
	});
}

// Получаем выбранный radiobutton
function getCheckedRadiobutton(radiogroupName){
	return $('.flat-radiobutton-checked[radiogroup='+radiogroupName+']').attr('name');
}

// Убавление количества товара на странице "корзина"
function goodNumDec(id){
	var num = Number($(id).html().replace('шт.', ''));
	$(id).html( num <= 0 ? '0 шт.' : (num - 1)+' шт.' );
}

// Прибавление количества товара на странице "корзина"
function goodNumInc(id){
	var num = Number($(id).html().replace('шт.', ''));
	$(id).html( (num + 1)+' шт.' );
}

// Удаление строки с товаров на странице "корзина"
function goodRowDel(s){
	$(s).css('opacity', '0.1');
}

// Таймаут, по истечению которого осуществляется переход на главную страницу
function cmn_toMainPage (mainPageUrl, timeoutInMs) {
	setTimeout(function(){
		location.href = mainPageUrl;
	}, timeout);
}


var photoSliderCurrPos = 0;
function nextChild(){
	var children = document.querySelector('.photo-slider').children;
	for(var i=0; i<children.length; i++){
		children[i].className = '';
	}

	photoSliderCurrPos++;
	if(photoSliderCurrPos >= children.length)
		photoSliderCurrPos = 0;

	children[photoSliderCurrPos].className = 'active-recipe';
}

function backChild(){
	var children = document.querySelector('.photo-slider').children;
	for(var i=0; i<children.length; i++){
		children[i].className = '';
	}

	photoSliderCurrPos--;
	if(photoSliderCurrPos < 0)
		photoSliderCurrPos = 0;

	children[photoSliderCurrPos].className = 'active-recipe';

}

var comboboxsList,
	comboboxElements,
	comboboxItemsList;
function cmn_combobox(){
	comboboxsList = document.querySelectorAll('[type=combobox]');

	for(var i = 0; i < comboboxsList.length; i++){
		comboboxElements = comboboxsList[i].children;

		// Показываем текст первого итема в combobox_title поумолчанию. Предполагается, что comboboxElements[2] - это combobox_items, a comboboxElements[0] - combobox_title
		comboboxElements[0].innerHTML = comboboxElements[2].children[0].innerHTML;

		document.querySelector('#combobox-selected-val').value = comboboxElements[0].innerHTML;

		for(var n = 0; n < comboboxElements.length; n++)
		{
			if(comboboxElements[n].getAttribute('type') == 'combobox_arrow')
			{
				comboboxElements[n].onclick = function(e){

					// Предпологается, что comboboxElements[2] - это combobox_items
					comboboxElements[2].style.display = 'block';

					// Скрываем итемы, если мышь покинула их область
					comboboxElements[2].onmouseout = function(e){
						if(e.toElement.parentNode != this)
							this.style.display = 'none';
					}

					// Теперь пробегаемся по детям элемента combobox_items
					comboboxItemsList = comboboxElements[2].children;

					for(var g = 0; g < comboboxItemsList.length; g++)
					{
						comboboxItemsList[g].onclick = function(e){

							// Записываем данные этого итема в combobox_title. Предполагается, что children[0] - это combobox_title
							this.parentNode.parentNode.children[0].innerHTML = this.innerHTML;
							document.querySelector('#combobox-selected-val').value = this.innerHTML;

							// Скрываем combobox_items
							this.parentNode.style.display = 'none';
							//console.log(this.parentNode.parentNode);
						};
					}
				};
			}
		}
	}
}

// Эффект для корзины
function cmn_toCart()
{
	var cartCnt = $('.mainmenu-icon-cart a').html();
	cartCnt++;
	$('.mainmenu-icon-cart').mouseover();
	$('.mainmenu-icon-cart').addClass('mainmenu-icon-cart-hovered');

	$('.mainmenu-icon-cart a').html(cartCnt);

	$('.mainmenu-icon-cart a').addClass('cart-a-blur');

	$('.mainmenu-icon-cart').effect('bounce', {}, 300, function(){
		$('.mainmenu-icon-cart').mouseleave();
		$('.mainmenu-icon-cart').removeClass('mainmenu-icon-cart-hovered');
		$('.mainmenu-icon-cart a').removeClass('cart-a-blur');
	});
}
