/**
 * index controller for listView item template (memory leak)
 * 
 */

// clear the list
function doClear(e){
	$.mySection.setItems([]);
}

// reload the listview
function doClick(e){
	
	var items=[];
	for(var i=0; i<4; i++){
		items.push({
			'template': 'myItem',
			'title':{'text': 'aaaaaaa'},
			'value':{'text': 'bbbbb'}
		});
	};
	
	$.mySection.setItems(items);
	
}



$.index.open();
