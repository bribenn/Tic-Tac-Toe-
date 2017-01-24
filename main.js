function check_equality(a, b, c) {
  aContent = $("#s" + a).text();
  bContent = $("#s" + b).text();
  cContent = $("#s" + c).text();
  
  if (aContent && aContent === bContent && aContent === cContent) {
    return true;
  } else {
    return false;
  }
}

function show_winner(winner) {
  // Convert x to X and o to O
  var player = $("#s" + winner).text().toUpperCase();
  $(".winner" + player).show();
}

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
    if        (check_equality(0, 1, 2)) {
      show_winner(0);
    } else if (check_equality(3, 4, 5)) {
      show_winner(3);
    } else if (check_equality(6, 7, 8)) {
      show_winner(6);
    }
    // Vertical Checks
      else if (check_equality(0, 3, 6)) {
      show_winner(0);
    } else if (check_equality(1, 4, 5)) {
      show_winner(1);
    } else if (check_equality(2, 5, 8)) {
      show_winner(2);
    }
    // Diagnoal checks
      else if (check_equality(0, 4, 8)) {
      show_winner(0);
    } else if (check_equality(2, 4, 6)) {
      show_winner(2);
    }
  });

  $('.reset-button').on('click', function() {
    location.reload();
  });
});

