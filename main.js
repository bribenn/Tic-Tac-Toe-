
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
				
		
				    if ($("#s0").contents() === $("#s1").contents() && $("#s1").contents() === $("#s2").contents()) {
				    	console.log("you win");
						$(".winner.(contents())").show();
					   } else if ($("#s3").contents() === $("#s4").contents() === $("#s5").contents()){
					   	$(".winner.(contents)").show();
					   } else if ($("#s6").contents() === $("#s7").contents() === $("#s8").contents()){
					   	$(".winner.(contents)").show();
					   } else if ($("#s0").contents() === $("#s3").contents() === $("#s6").contents()){
					   	$(".winner.(contents)").show();
					   } else if ($("#s1").contents() === $("#s4").contents() === $("#s7").contents()){
					 	$(".winner.(contents)").show();
					   } else if ($("#s2").contents() === $("#s5").contents() === $("#s8").contents()){
					 	$(".winner.(contents)").show();
					   } else if ($("#s0").contents() === $("#s4").contents() === $("#s8").contents()){
					   	$(".winner.(contents)").show();
					   } else if ($("#s2").contents() === $("#s4").contents() === $("#s6").contents()){
					 	$(".winner.(contents)").show();
					   } else {
						console.log('keep playing');
					   }
			
	$('.reset-button').on('click', function() {
		location.reload();
	});	
		
	});
});
	
	



