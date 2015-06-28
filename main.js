$(document).on('ready', function() {
  
  // PART 1 //
	$('.p1-btn1').on('click', function(){ //prints to concole upon click
		console.log('mischief managed')
	})

	$('.p1-btn2').on('click', function(){ // appends some texct upon click
		$('.append-text').text("Ta Da! The text was just magically appended!")
	})

	$('.p1-btn3').on('click', function(){ // appends some texct upon click
		$('.h1-change').text("This is a New Title!")
	})

	$('.p1-btn4').on('click', function(){ // appends some texct upon click
		$('.magic').html("<ul>  <li>item 1</li> <li>item 2</li> <li>item 3</li>  </ul>")
	})


	// PART 2 //
	$('.change').on('mouseover', function(){ // change the background to pink!
		$(this).addClass('BG-change');
	})

	$('.change').on('mouseout', function(){ // change the background to pink!
		$(this).removeClass('BG-change');
	})

	$('.more-excitement').on('mouseover', function(){ // add an explination point to the headings
		$(this).append('!');
	})

	$('.confirm-leave-site').on('click', function(){
		var cancel = confirm("Are you sure you want to leave the site?");
		if ( cancel === false) {
	    	return false
		} 
	})

	$('.remove-from-DOM').on('click', function(){
		var rm = confirm("Are you sure you want to leave the site? If no, link will be removed.");
		if ( rm === false) {
	    	$('.remove-from-DOM').remove();
	    	return false
		} 
	})


	// PART 3 //
	
	var popupBox = $('<div class="cover"><div class="box-content"><div class="align-right"><button class="close-btn">X</button></div><h3>You other brothers cant deny</h3><p>When a DOM walks in with some itty-bitty space and a rounded thing in your face...</p></div></div>'); 

	$('.popup').on('click', function(){
		$('body').before(popupBox);
	
		$('.close-btn').on('click', function(c){
			$(popupBox).remove()
		});
		
		$('.cover').css({
			'position'	: 'fixed',
			'top'		: '0',
			'left'		: '0',
			'background': 'rgba(0,0,0,0.6)',
			'z-index'	: '1',
			'width'		: '100%',
			'height'	: '100%',
		});

		$('.box-content').css({
			'background-color'	: '#fff',
			'border'			: 'solid 2px #ddd',
			'border-radius'		: '20px',
			'box-sizing'		: 'border-box',
			'padding'			: '20px 20px 45px',
			'width'				: '40%',
			'margin'			: '0 auto',
			'top'				: '20%',
			'position'			: 'relative',
			'text-align'		: 'center',

		});

		$('.close-btn').css({
			'background-color'	: 'red',
			'color'				: 'white',
			'padding'			: '5px 10px',
			'border-radius'		: '5px',
			'text-decoration'	: 'none',
			'border'			: 'none',
			'box-shadow'		: 'none',
		});
	})

		
});