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
	$('.change').on('mouseover', function(){
		$(this).addClass('BG-change');
	})

});