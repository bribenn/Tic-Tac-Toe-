
$(document).ready(function() {
	$('.winnerO').hide();
	$('.winnerX').hide();

	var vSelected = '';
	var oWinner = 'Player O is the winner!';
	var xWinner = 'Player X is the winner!';

	$(".btn").on('click', function() {
		$(this).removeClass('not-selected');
		$(this).siblings().addClass('not-selected');
		const isO = $(this).hasClass('btn-o');
		if (isO) {
			vSelected = 'O';	
		} else {
			vSelected = 'X';
		}
	});

	$('.square').on('click', function() {
      $(this).text(vSelected);
      	if (vSelected === 'O') {
      		$(this).addClass('hasO').removeClass('hasX');
      	} else {
      		$(this).addClass('hasX').removeClass('hasO');
     	}
				
		
				    	if ($("#s0").text() === $("#s1").text() && $("#s1").text() === $("#s2").text()) {
				    	// console.log(".text() win"); NEED LOGIC FOR showing "winnerO" or "winnerX" class
					   } else if ($("#s3").text() === $("#s4").text() && $("#s4").text() === $("#s5").text()){
					   	console.log("O win");
					   } else if ($("#s6").text() === $("#s7").text() && $("#s7").text() === $("#s8").text()){
					   	console.log("O win");
					   } else if ($("#s0").text() === $("#s3").text() && $("#s3").text() === $("#s6").text()){
					   	console.log("O win");
					   } else if ($("#s1").text() === $("#s4").text() && $("#s4").text() === $("#s7").text()){
					 	console.log("O win");
					   } else if ($("#s2").text() === $("#s5").text() && $("#s5").text() === $("#s8").text()){
					 	console.log("O win");
					   } else if ($("#s0").text() === $("#s4").text() && $("#s4").text() === $("#s8").text()){
					   	console.log("O win");
					   } else if ($("#s2").text() === $("#s4").text() && $("#s4").text() === $("#s6").text()){
					 	console.log("O win");
					   } else {
						console.log('keep playing');
					   }
			
	$('.reset-button').on('click', function() {
		location.reload();
	});	
		
	});
});
	
	



