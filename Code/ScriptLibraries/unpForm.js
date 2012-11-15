$(window).load( function() {
	allowFormsInIscroll();
	try{
		if ($('.richtextfield').val().indexOf("<") > -1){
			var val = $($('.richtextfield').val()).text();
			$('.richtextfield').val(val);
		}
	}catch(e){}
});

function allowFormsInIscroll() {
	[].slice.call(document.querySelectorAll('input, select, button, textarea')).forEach(function(el) {
		el.addEventListener(('ontouchstart' in window) ? 'touchstart' : 'mousedown',
				function(e) {
			e.stopPropagation();
		})
	})
}
