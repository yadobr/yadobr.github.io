window.onload = function () {
	
	function cmn_photoSlider(){

		// Получаем все элементы, у которых есть атрибут photo-slider-group и photo-slider-target
		var cmn_photoSliderGroups,
			cmn_photoSliderGroupButtons;

		cmn_photoSliderGroups = document.querySelectorAll('[photo-slider-group][photo-slider-group-target]');

		// Обрабатываем дочерние элементы у полученных групп
		for(var i = 0; i < cmn_photoSliderGroups.length; i++){

			// Получаем дочерние элементы группы
			cmn_photoSliderGroupButtons = cmn_photoSliderGroups[i].children;

			// Ставим дефаултное изображение в photo-slider-group-target
			document.querySelector(cmn_photoSliderGroups[i].getAttribute('photo-slider-group-target')).style.backgroundImage = 'url('+cmn_photoSliderGroupButtons[0].getAttribute('photo-slider-group-target-src')+')';

			// Обрабатываем кнопки в группе
			for(var n = 0; n < cmn_photoSliderGroupButtons.length; n++){

				// По нажатию на кнопку
				cmn_photoSliderGroupButtons[n].onclick = function(){

					// Убираем у всех кнопок класс b-slider-btn-active и ставим b-slider-btn
					for(var g = 0; g < cmn_photoSliderGroupButtons.length; g++)
						cmn_photoSliderGroupButtons[g].className = 'b-slider-btn';

					// Меняем класс у нажатой кнопки на b-slider-btn-active
					this.className = 'b-slider-btn-active';

					// Меняем картинку у элемента, указанного в атрибуте photo-slider-group-target, на ту, что указана в атрибуте photo-slider-group-target-src у кнопки
					document.querySelector(this.parentNode.getAttribute('photo-slider-group-target')).style.backgroundImage = 'url('+this.getAttribute('photo-slider-group-target-src')+')';

				}
			}
		}
	}

	cmn_photoSlider();
}

var cmn_autoPhotoSliderElements;
function cmn_autoPhotoSlider(sliderElementsContainerSelector, timeInterval){
	var curPos = 0,
		maxPos;

	cmn_autoPhotoSliderElements = document.querySelector(sliderElementsContainerSelector).children;
	maxPos = cmn_autoPhotoSliderElements.length;

	setInterval(function(){
		if(curPos == maxPos)
			curPos = 0;

		$(cmn_autoPhotoSliderElements[curPos]).click();
		curPos++;
	}, timeInterval);
}