var darkShield = (function buildShield(){
		var dullOverlay = document.createElement('div'),
		    size = {
		        height : '100vh',
		        width : '100vw',
		    },
		    position = {
		        left : '0px',
		        position : 'fixed',
		        top : '0px',
		    },
		    brightness = {
		        'background-color': 'black',
		        opacity: 0.8,
		    },
		    style ={};

		//merge styles to style object. mind you. this is redundant
		for (var attrname in size) { style[attrname] = size[attrname]; }
		for (var attrname in position) { style[attrname] = position[attrname]; }
		for (var attrname in brightness) { style[attrname] = brightness[attrname]; }

		//told you this will be redundant
		for (var attrname in style) { dullOverlay.style[attrname] = style[attrname]; }

		return dullOverlay;
	})(),
	executeScript = function(){

		console.log('document.body.innerHTML+='+darkShield.outerHTML);
		chrome.tabs.executeScript({
			code: 'document.body.innerHTML+='+darkShield.outerHTML
		});
	},
	bindDarkForceHere = function(){

		var darthWader = document.getElementById('brighten'),
		  	useForce = function(){
				console.log(darthWader.value);
		  	};
	  	executeScript();
		darthWader.addEventListener('input', useForce);
	};


document.addEventListener('DOMContentLoaded', bindDarkForceHere );
