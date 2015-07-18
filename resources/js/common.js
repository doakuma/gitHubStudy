$(function(){
	init();	
})

function init() {
	viewMember();
	menuTeam();
	chkScroll();
}
function chkScroll() {
	$(window).scroll(function(){
		var _currentScroll = $(this).scrollTop();
		var _activeScroll = $('.tit_unlimit').outerHeight();
		if(_currentScroll > _activeScroll) {
			$('#header, .btnTopArea').delay(350).addClass('active');
		} else if (_currentScroll < _activeScroll){
			$('#header, .btnTopArea').delay(350).removeClass('active');
		}
	})
}
function viewMember(){
	$('.portrait').click(function(){
		$(this).toggleClass('active')
	})
	// $('.detail_member').click(function(){
	// 	$(this).toggleClass('active')
	// })
}

function menuTeam() {
	$('*[data-role=btn-scroll] a').each(function(){
		var _activeScroll = $('.header_inner').height();
		$(this).click(function(e){
			var _target = $(this).attr('href');
			var _top = $(_target).offset().top - _activeScroll;
			$('html, body').stop().animate({
				scrollTop: _top 
			},750);
			console.log(_top)
			e.preventDefault()
		})
	})
}