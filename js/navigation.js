/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var button, menu;

	button = document.getElementsByClassName('menu-toggle')[0];
	menu = document.getElementsByClassName('main-navigation')[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	button.onclick = function() {
		if ( -1 !== button.className.indexOf( 'toggled' ) ) {
			button.className = button.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
			menu.style.display = 'block';
		} else {
			button.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
			menu.style.display = '';
		}
	};

	function resetDisplay() {
		if ( window.innerWidth > 600 ) {
			button.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
			menu.style.display = '';
		}
	}

	window.addEventListener("resize", resetDisplay);
} )();
