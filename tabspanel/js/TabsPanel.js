// TABS PANEL
// CREATED BY ROS.PRO
// VERSION 0.1

function TabsPanel () {
	var tabTitleList, tabContentList, tabTitleActivePosition, tabContentActivePosition;

	tabTitleList = document.querySelectorAll('.tab-title');	
	tabContentList = document.querySelectorAll('.tab-content');	

	if( (tabTitleList.length != 0 && tabContentList.length !=0) && (tabTitleList.length == tabContentList.length) ){
		var position, tabTitleClassName, tabContentClassName;
				
		for(var i = 0; i < tabTitleList.length; i++){

			// SET A POSITION ATTRIBUTE.
			tabTitleList[i].setAttribute('position', i);
			tabContentList[i].setAttribute('position', i);

			// REMEMBER ACTIVE TAB AND CONTENT POSITION
			if(tabTitleList[i].className.indexOf('tab-title-active') != -1) 
				tabTitleActivePosition = i;

			if(tabContentList[i].className.indexOf('tab-content-active') != -1) 
				tabContentActivePosition = i;
			
			// ADD EVENT HANDLERS.
			tabTitleList[i].onclick = function(e){

				// HIDE OLD ACTIVE TAB AND CONTENT
				tabTitleList[tabTitleActivePosition].className = tabTitleList[tabTitleActivePosition].className.replace(' tab-title-active', '');
				tabContentList[tabContentActivePosition].className = tabContentList[tabContentActivePosition].className.replace(' tab-content-active', '');

				// ADD CLASSES tab-title-active AND tab-content-active TO NEW ACTIVE TAB AND CONTENT
				position = e.target.getAttribute('position');
				
				tabTitleClassName = tabTitleList[position].className;
				tabContentClassName = tabContentList[position].className;

				tabTitleList[position].className += tabTitleClassName[tabTitleClassName.length-1] == ' ' ? 'tab-title-active' : ' tab-title-active';
				tabContentList[position].className += tabContentClassName[tabContentClassName.length-1] == ' ' ? 'tab-content-active' : ' tab-content-active';

				// REMEMBER ACTIVE TAB AND CONTENT POSITION
				tabTitleActivePosition = position;
				tabContentActivePosition = position;
			}
		}		
	}
}