		// Catching the 'keydown' event for FireTV.
		document.addEventListener('keydown', function(event) {

			var currentElement = document.activeElement;
			var curIndex = currentElement.tabIndex; //get current elements tab index
			var tabbables = document.querySelectorAll(".tabable"); //get all tabable elements
			var firstTabIndex = tabbables[0];
			var lastTabIndex = tabbables[tabbables.length - 1].tabIndex;
			console.log(curIndex);
			console.log(lastTabIndex);
			if(curIndex == lastTabIndex) { //if we are on the last tabindex, go back to the beginning
				curIndex = 0;
			}
			for(var i=0; i<tabbables.length; i++) { //loop through each element
				if (event.keyCode == '38') {
					if(tabbables[i].tabIndex == (curIndex-1)) { //check the tabindex to see if it's the element we want
						tabbables[i].focus(); //if it's the one we want, focus it and exit the loop
						break;
					}
				}
				if (event.keyCode == '40') {
					if(tabbables[i].tabIndex == (curIndex+1)) { //check the tabindex to see if it's the element we want
						tabbables[i].focus(); //if it's the one we want, focus it and exit the loop
						break;
					}
				}

			}
		});
