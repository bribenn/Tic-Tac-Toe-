$(document).ready(function() {
  $('.winnerO').hide();
  $('.winnerX').hide();

  var vSelected = '';
  var oWinner = 'Player O is the winner!';
  var xWinner = 'Player X is the winner!';

  // Function to handle click on O and X buttons at top
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

  // Function to handle clicking of each square
  $('.square').on('click', function() {
    $(this).text(vSelected);

    // Check if anyone won
    var currentWinner = '';

    // Horizontal Checks
    if ($("#s0").text() && $("#s0").text() == $("#s1").text() && $("#s0").text() == $("#s2").text()) {
      currentWinner = $("#s0").text();
    } else if ($("#s3").text() && $("#s3").text() == $("#s4").text() && $("#s3").text() == $("#s5").text()) {
      currentWinner = $("#s3").text();
    } else if ($("#s6").text() && $("#s6").text() == $("#s7").text() && $("#s6").text() == $("#s8").text()) {
      currentWinner = $("#s6").text();
    }
    // Vertical Checks
    else   if ($("#s0").text() && $("#s0").text() == $("#s3").text() && $("#s0").text() == $("#s6").text()) {
      currentWinner = $("#s0").text();
    } else if ($("#s1").text() && $("#s1").text() == $("#s4").text() && $("#s1").text() == $("#s7").text()) {
      currentWinner = $("#s1").text();
    } else if ($("#s2").text() && $("#s2").text() == $("#s5").text() && $("#s2").text() == $("#s8").text()) {
      currentWinner = $("#s2").text();
    }
    // Diagonal Checks
    else   if ($("#s0").text() && $("#s0").text() == $("#s4").text() && $("#s0").text() == $("#s8").text()) {
      currentWinner = $("#s0").text();
    } else if ($("#s2").text() && $("#s2").text() == $("#s4").text() && $("#s2").text() == $("#s6").text()) {
      currentWinner = $("#s2").text();
    }

    currentWinner = currentWinner.toUpperCase();
    if (currentWinner) {
      $(".winner" + currentWinner).show();
    } else {
      console.log('keep playing');
    }
  });

  $('.reset-button').on('click', function() {
    location.reload();
  });
});

