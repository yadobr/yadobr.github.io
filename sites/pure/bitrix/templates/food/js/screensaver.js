// Анимация облаков
var cloudsInterval,
	cloudsPosX,
	cloudsDirect = -1;
function scrsav_cloudsAnimation(){
	document.querySelector('.b-screensaver-clouds').style.backgroundPosition = '385px 0';

	// Выбираем направление полета
	setInterval(function(){

		// Летим налево
		if(cloudsDirect == 1){
			cloudsDirect = -1;
			document.querySelector('.b-screensaver-clouds').style.backgroundImage = 'url(bitrix/templates/food/images/b-screensaver-clouds-to-left.png)';
			document.querySelector('.b-screensaver-clouds').style.backgroundPosition = '385px 0';
		}

		// Летим направо
		else{
			cloudsDirect = 1;
			document.querySelector('.b-screensaver-clouds').style.backgroundImage = 'url(bitrix/templates/food/images/b-screensaver-clouds-to-right.png)';	
			document.querySelector('.b-screensaver-clouds').style.backgroundPosition = '-385px 0';
		}
	}, 27000);

	cloudsInterval = setInterval(function(){
		cloudsPosX = document.querySelector('.b-screensaver-clouds').style.backgroundPosition.split(' ')[0].replace('px', '');

		//console.log(cloudsPosX);

		// Летим направо
		if( cloudsDirect == 1 ){	
			document.querySelector('.b-screensaver-clouds').style.backgroundPosition = Number(cloudsPosX) + 0.4 + 'px 0';
		}

		// Летим налево
		else{		
			document.querySelector('.b-screensaver-clouds').style.backgroundPosition = Number(cloudsPosX) - 0.4 + 'px 0';
		}

	}, 0);
}

// Анимация птиц
var birdsInterval,
	birdsPosX,
	birdsDirect = 1;
function scrsav_birdsAnimation(){
	document.querySelector('.b-screensaver-birds').style.backgroundPosition = '-130px 0';

	// Выбираем направление полета
	setInterval(function(){

		// Летим налево
		if(birdsDirect == 1){
			birdsDirect = -1;
			document.querySelector('.b-screensaver-birds').style.backgroundImage = 'url(bitrix/templates/food/images/birds-to-left.png)';
			document.querySelector('.b-screensaver-birds').style.backgroundPosition = '130px 0';
		}

		// Летим направо
		else{
			birdsDirect = 1;
			document.querySelector('.b-screensaver-birds').style.backgroundImage = 'url(bitrix/templates/food/images/birds-to-right.png)';	
			document.querySelector('.b-screensaver-birds').style.backgroundPosition = '-130px 0';
		}
	}, 27000);

	birdsInterval = setInterval(function(){
		birdsPosX = document.querySelector('.b-screensaver-birds').style.backgroundPosition.split(' ')[0].replace('px', '');

		// Летим направо
		if( birdsDirect == 1 ){	
			document.querySelector('.b-screensaver-birds').style.backgroundPosition = Number(birdsPosX) + 0.5 + 'px 0';
		}

		// Летим налево
		else{		
			document.querySelector('.b-screensaver-birds').style.backgroundPosition = Number(birdsPosX) - 0.5 + 'px 0';
		}

	}, 0);
}

// Таймаут, по истечению которого осуществляется переход на главную страницу
function scrsav_toMainPage (mainPageUrl, timeoutInMs) {

	// Отсчитываем время до перехода и каждую секунду обновляем поле .b-screensaver-time-left
	setInterval(function(){
		if(timeoutInMs <= 0)
			location.href = mainPageUrl;
		else{
			document.getElementsByClassName('b-screensaver-time-left')[0].innerHTML = 'ОСТАЛОСЬ '+timeoutInMs / 1000;
		}

		timeoutInMs -= 1000;
	}, 1000);
}