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
      vSelected = 'o';	
    } else {
      vSelected = 'x'
    }
  });

  $('.square').on('click', function() {
    $(this).text(vSelected);
    if (vSelected === 'o') {
      $(this).addClass('hasO').removeClass('hasX');
    } else {
      $(this).addClass('hasX').removeClass('hasO');
    }


    $('.square').each(function() {
      if ($("#s0").hasClass('hasO') && $("#s1").hasClass('hasO') && $("#s2").hasClass('hasO')) {
        $(".winnerO").show();
      } else if ($("#s3").hasClass('hasO') && $("#s4").hasClass('hasO') && $("#s5").hasClass('hasO')){
        $(".winnerO").show();
      } else if ($("#s6").hasClass('hasO') && $("#s7").hasClass('hasO') && $("#s8").hasClass('hasO')){
        $(".winnerO").show();
      } else if ($("#s0").hasClass('hasO') && $("#s3").hasClass('hasO') && $("#s6").hasClass('hasO')){
        $(".winnerO").show();
      } else if ($("#s1").hasClass('hasO') && $("#s4").hasClass('hasO') && $("#s7").hasClass('hasO')){
        $(".winnerO").show();
      } else if ($("#s2").hasClass('hasO') && $("#s5").hasClass('hasO') && $("#s8").hasClass('hasO')){
        $(".winnerO").show();
      } else if ($("#s0").hasClass('hasO') && $("#s4").hasClass('hasO') && $("#s8").hasClass('hasO')){
        $(".winnerO").show();
      } else if ($("#s2").hasClass('hasO') && $("#s4").hasClass('hasO') && $("#s6").hasClass('hasO')){
        $(".winnerO").show();
      } else if ($("#s0").hasClass('hasX') && $("#s1").hasClass('hasX') && $("#s2").hasClass('hasX')) {
        $(".winnerX").show();
      } else if ($("#s3").hasClass('hasX') && $("#s4").hasClass('hasX') && $("#s5").hasClass('hasX')){
        $(".winnerX").show();
      } else if ($("#s6").hasClass('hasX') && $("#s7").hasClass('hasX') && $("#s8").hasClass('hasX')){
        $(".winnerX").show();
      } else if ($("#s0").hasClass('hasX') && $("#s3").hasClass('hasX') && $("#s6").hasClass('hasX')){
        $(".winnerX").show();
      } else if ($("#s1").hasClass('hasX') && $("#s4").hasClass('hasX') && $("#s7").hasClass('hasX')){
        $(".winnerX").show();
      } else if ($("#s2").hasClass('hasX') && $("#s5").hasClass('hasX') && $("#s8").hasClass('hasX')){
        $(".winnerX").show();
      } else if ($("#s0").hasClass('hasX') && $("#s4").hasClass('hasX') && $("#s8").hasClass('hasX')){
        $(".winnerX").show();
      } else if ($("#s2").hasClass('hasX') && $("#s4").hasClass('hasX') && $("#s6").hasClass('hasX')){
        $(".winnerX").show();
      } else {
        console.log('keep playing');
      }
    });
  });
  $('.reset-button').on('click', function() {
    location.reload();
  });
});





