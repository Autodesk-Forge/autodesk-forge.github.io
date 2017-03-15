var skel =require ('../assets/skel.min.js') ;
var scrolly =require ('../assets/jquery.scrolly.min.js') ;
var scrollex =require ('../assets/jquery.scrollex.min.js') ;

export function init ($) {
	var	$window =$(window) ;
	var $body =$('body') ;
	var $header =$('#header') ;

	// Disable animations/transitions until the page has loaded.
	$body.addClass ('is-loading') ;
	$window.on ('load pageshow', function () {
		window.setTimeout (function () {
				$body.removeClass ('is-loading') ;
			}, 100
		) ;
	}) ;

	// Clear transitioning state on unload/hide.
	$window.on ('unload pagehide', function () {
		window.setTimeout (function () {
				$('.is-transitioning').removeClass ('is-transitioning') ;
			}, 250
		) ;
	}) ;

	// Fix: Enable IE-only tweaks.
	if ( skel.vars.browser == 'ie' || skel.vars.browser == 'edge' )
		$body.addClass ('is-ie') ;

	// Fix: Placeholder polyfill.
	//$('form').placeholder () ;

	// Prioritize "important" elements on medium.
	//skel.on ('+medium -medium', function () {
	//	$.prioritize (
	//		'.important\\28 medium\\29',
	//		skel.breakpoint ('medium').active
	//	) ;
	//}) ;

	// Scrolly.
	$('.scrolly').scrolly ({
		offset: function () {
			return ($header.height () - 2) ;
		}
	}) ;
}

export function tiles ($) {
	var $wrapper =$('#wrapper') ;
	// Tiles.
	var $tiles =$('.tiles > article') ;
	$tiles.each (function () {
		var $this =$(this) ;
		var $image =$this.find ('.image') ;
		var $img =$image.find ('img') ;
		var $link =$this.find ('.link') ;
		var x ;
		// Image.
		// Set image.
		$this.css ('background-image', 'url(' + $img.attr ('src') + ')') ;
		// Set position.
		if ( x =$img.data ('position') )
			$image.css ('background-position', x) ;
		// Hide original.
		$image.hide () ;
		// Link.
		if ( $link.length > 0 ) {
			var $x =$link.clone ()
				.text ('')
				.addClass ('primary')
				.appendTo ($this) ;
			$link =$link.add ($x) ;
			$link.on ('click', function (event) {
				var href =$link.attr ('href') ;
				// Prevent default.
				event.stopPropagation () ;
				event.preventDefault () ;
				// Start transitioning.
				$this.addClass ('is-transitioning') ;
				$wrapper.addClass ('is-transitioning') ;
				// Redirect.
				window.setTimeout (function () {
						if ($link.attr('target') == '_blank')
							window.open (href) ;
						else
							location.href =href ;
					}, 500
				) ;
			}) ;
		}
	}) ;
}

export function header ($) {
	var	$window =$(window) ;
	var $header =$('#header') ;
	var $banner =$('#banner') ;
	// Header.
	if ( skel.vars.IEVersion < 9 )
		$header.removeClass ('alt') ;
	if (   $banner.length > 0
		&& $header.hasClass ('alt')
	) {
		$window.on ('resize', function () {
			$window.trigger ('scroll') ;
		}) ;
		$window.on ('load', function () {
			$banner.scrollex ({
				bottom: $header.height () + 10,
				terminate: function () { $header.removeClass ('alt') ; },
				enter: function () { $header.addClass ('alt') ; },
				leave: function () { $header.removeClass ('alt'); $header.addClass ('reveal') ; }
			}) ;
			window.setTimeout (function () {
					$window.triggerHandler ('scroll') ;
				}, 100
			) ;
		}) ;
	}
}

export function banner ($) {
	var $banner =$('#banner') ;
	// Banner.
	$banner.each (function () {
		var $this =$(this) ;
		var $image =$this.find ('.image') ;
		var $img =$image.find ('img') ;
		// Parallax.
	//	$this._parallax (0.275) ;
		// Image.
		if ( $image.length > 0 ) {
			// Set image.
			$this.css ('background-image', 'url(' + $img.attr ('src') + ')') ;
			// Hide original.
			$image.hide () ;
		}
	}) ;
}

export function menu ($) {
	var $body =$('body') ;
	// Menu
	var $menu =$('#menu') ;
	var $menuInner ;
	$menu.wrapInner ('<div class="inner"></div>') ;
	$menuInner =$menu.children ('.inner') ;
	$menu._locked =false ;
	$menu._lock =function () {
		if ( $menu._locked )
			return (false) ;
		$menu._locked =true ;
		window.setTimeout (function () {
				$menu._locked =false ;
			}, 350
		) ;
		return (true) ;
	} ;
	$menu._show =function () {
		if ( $menu._lock () )
			$body.addClass ('is-menu-visible') ;
	} ;
	$menu._hide =function () {
		if ( $menu._lock () )
			$body.removeClass ('is-menu-visible') ;
	} ;
	$menu._toggle =function () {
		if ( $menu._lock () )
			$body.toggleClass ('is-menu-visible') ;
	} ;
	$menuInner
		.on ('click', function (event) {
			event.stopPropagation () ;
		})
		.on ('click', 'a', function (event) {
			var href =$(this).attr ('href') ;
			event.preventDefault () ;
			event.stopPropagation () ;
			// Hide.
			$menu._hide () ;
			// Redirect.
			window.setTimeout (function () {
					window.location.href =href ;
				}, 250
			) ;
		}) ;
	$menu
		.appendTo ($body)
		.on ('click', function (event) {
			event.stopPropagation () ;
			event.preventDefault () ;
			$body.removeClass ('is-menu-visible') ;
		})
		.append ('<a class="close" href="#menu">Close</a>') ;
	$body
		.on ('click', 'a[href="#menu"]', function (event) {
			event.stopPropagation () ;
			event.preventDefault () ;
			// Toggle.
			$menu._toggle () ;
		})
		.on ('click', function (event) {
			// Hide.
			$menu._hide () ;
		})
		.on('keydown', function (event) {
			// Hide on escape.
			if ( event.keyCode == 27 )
				$menu._hide () ;
		}) ;
}

export function forgeMenu ($) {
	var $body =$('body') ;
	// Menu
	var $menu =$('#forge-menu') ;
	var $menuInner ;
	$menu.wrapInner ('<div class="forge-menu-inner"></div>') ;
	$menuInner =$menu.children ('.forge-menu-inner') ;
	$menu._locked =false ;
	$menu._lock =function () {
		if ( $menu._locked )
			return (false) ;
		$menu._locked =true ;
		window.setTimeout (function () {
				$menu._locked =false ;
			}, 350
		) ;
		return (true) ;
	} ;
	$menu._show =function () {
		if ( $menu._lock () )
			$body.addClass ('is-forge-menu-visible') ;
	} ;
	$menu._hide =function () {
		if ( $menu._lock () )
			$body.removeClass ('is-forge-menu-visible') ;
	} ;
	$menu._toggle =function () {
		if ( $menu._lock () )
			$body.toggleClass ('is-forge-menu-visible') ;
	} ;
	$menuInner
		.on ('click', function (event) {
			event.stopPropagation () ;
		})
		.on ('click', 'a', function (event) {
			var href =$(this).attr ('href') ;
			event.preventDefault () ;
			event.stopPropagation () ;
			// Hide.
			$menu._hide () ;
			// Redirect.
			window.setTimeout (function () {
					window.location.href =href ;
				}, 250
			) ;
		}) ;
	$menu
		.appendTo ($body)
		.on ('click', function (event) {
			event.stopPropagation () ;
			event.preventDefault () ;
			$body.removeClass ('is-forge-menu-visible') ;
		})
		.append ('<a class="close" href="#forge-menu">Close</a>') ;
	$body
		.on ('click', 'a[href="#forge-menu"]', function (event) {
			event.stopPropagation () ;
			event.preventDefault () ;
			// Toggle.
			$menu._toggle () ;
		})
		.on ('click', function (event) {
			// Hide.
			$menu._hide () ;
		})
		.on('keydown', function (event) {
			// Hide on escape.
			if ( event.keyCode == 27 )
				$menu._hide () ;
		}) ;
}