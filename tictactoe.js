// C1-C9 represents each cell.

$(function() {
      var c1;
			var c2;
			var c3;
			var c4;
			var c5;
			var c6;
			var c7;
			var c8;
			var c9;
			var count = 0;


// When each cell is clicked, console.log confirms whether or not it was clicked for testing purposes. It then checks to make sure
// that the current cell is not occupied by an x or o, and if so, puts in x. Count++ is a check to register that the move has occurred
// and once it reaches 9, if there is no winner, will declare a draw. It takes the total value of the previous counts and adds one.

$('div#cell-1').click( function() {
  console.log('clicked!');
  if(c1 != "X" && c1 != "O") {
  	$(this).text('x');
  	c1 = "X";
  	count++;
    checkWinner();
  	randomizer();
  }
});
  $('div#cell-2').click( function() {
  console.log('clicked!');
  if(c2 != "X" && c2 != "O") {
    $(this).text('x');
    c2 = "X";
    count++;
    checkWinner();
    randomizer();
  }
});
  $('div#cell-3').click( function() {
  console.log('clicked!');
  if(c3 != "X" && c3 != "O") {
    $(this).text('x');
    c3 = "X";
    count++;
    checkWinner();
    randomizer();
  }
});
  $('div#cell-4').click( function() {
  console.log('clicked!');
  if(c4 != "X" && c4 != "O") {
    $(this).text('x');
    c4 = "X";
    count++;
    checkWinner();
    randomizer();
  }
});
  $('div#cell-5').click( function() {
  console.log('clicked!');
  if(c5 != "X" && c5 != "O") {
    $(this).text('x');
    c5 = "X";
    count++;
    checkWinner();
    randomizer();
  }
});
  $('div#cell-6').click( function() {
  console.log('clicked!');
  if(c6 != "X" && c6 != "O") {
    $(this).text('x');
    c6 = "X";
    count++;
    checkWinner();
    randomizer();
  }
});
  $('div#cell-7').click( function() {
  console.log('clicked!');
  if(c7 != "X" && c7 != "O") {
    $(this).text('x');
    c7 = "X";
    count++;
    checkWinner();
    randomizer();
  }
});
  $('div#cell-8').click( function() {
  console.log('clicked!');
  if(c8 != "X" && c8 != "O") {
    $(this).text('x');
    c8 = "X";
    count++;
    checkWinner();
    randomizer();
  }
});
  $('div#cell-9').click( function() {
    console.log('clicked!');
    if(c9 != "X" && c9 != "O") {
      $(this).text('x');
      c9 = "X";
      count++;
      checkWinner();
      randomizer();
  }
});

// checkWinner goes through to see if there is an X in any possible 3-in-a-row posiiton and if so, runs the win function. If 9 moves
// have been made, there will be a draw. If O is in any 3-in-a-row position, it will run the loss function.

function checkWinner() {
	if(c1 == "X" && c2 == "X" && c3 == "X") {
		win();
	}
	if(c1 == "X" && c5 == "X" && c9 == "X") {
		win();
	}
	if(c3 == "X" && c5 == "X" && c7 == "X") {
		win();
	}
	if(c4 == "X" && c5 == "X" && c6 == "X") {
		win();
	}
	if(c7 == "X" && c8 == "X" && c9 == "X") {
		win();
	}
	if(c1 == "X" && c4 == "X" && c7 == "X") {
		win();
	}
	if(c2 == "X" && c5 == "X" && c8 == "X") {
		win();
	}
	if(c3 == "X" && c6 == "X" && c9 == "X") {
		win();
	}
	if(c1 == "O" && c2 == "O" && c3 == "O") {
		loss();
	}
	if(c1 == "O" && c5 == "O" && c9 == "O") {
		win();
	}
	if(c3 == "O" && c5 == "O" && c7 == "O") {
		loss();
	}
	if(c4 == "O" && c5 == "O" && c6 == "O") {
		loss();
	}
	if(c7 == "O" && c8 == "O" && c9 == "O") {
		loss();
	}
	if(c1 == "O" && c4 == "O" && c7 == "O") {
		loss();
	}
	if(c2 == "O" && c5 == "O" && c8 == "O") {
		loss();
	}
	if(c3 == "O" && c6 == "O" && c9 == "O") {
		loss();
	}
	if(count == 9) {
		draw();
	}
}

// Randomizer returns any number between the minimum and maximum range, in this case, anything between 1-9, which is the number of cells.
// Found variable is a true/false variable that declares when the AI has found a cell and made a move. If it's removed from the function,
// turns happen out of order or not at all.


function randomizer() {
  var Found = false;
  while(Found != true) {
    var Random = Math.floor(Math.random() * 9) +1;

    if(Random == 1 && c1 != "X" && c1 !="O") {
      c1 = "O";
      $('div#cell-1').text('o');
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 2 && c2 != "X" && c2 !="O") {
      c2 = "O";
      $('div#cell-2').text('o');
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 3 && c3 != "X" && c3 !="O") {
      $('div#cell-3').text('o');
      c3 = "O";
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 4 && c4 != "X" && c4 !="O") {
      c4 = "O";
      $('div#cell-4').text('o');
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 5 && c5 != "X" && c5 !="O") {
      c5 = "O";
      $('div#cell-5').text('o');
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 6 && c6 != "X" && c6 !="O") {
      c6 = "O";
      $('div#cell-6').text('o');
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 7 && c7 != "X" && c7 !="O") {
      c7 = "O";
      $('div#cell-7').text('o');
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 8 && c8 != "X" && c8 !="O") {
      c8 = "O";
      $('div#cell-8').text('o');
      count++;
      checkWinner();
      Found = true;
    }
    if(Random == 9 && c9 != "X" && c9 !="O") {
      c9 = "O";
      $('div#cell-9').text('o');
      count++;
      checkWinner();
      Found = true;
    }
  }
  Found = false;
}

// reset function restores all cells to 0 value, restores the count back to 0 so that 9 moves must be made for a draw, and erases
// the previous text.

  function reset() {
  	c1 = 0;
  	c2 = 0;
  	c3 = 0;
  	c4 = 0;
  	c5 = 0;
  	c6 = 0;
  	c7 = 0;
  	c8 = 0;
  	c9 = 0;
    count = 0;
  	$('#cell-1').text('');
    $('#cell-2').text('');
    $('#cell-3').text('');
    $('#cell-4').text('');
    $('#cell-5').text('');
    $('#cell-6').text('');
    $('#cell-7').text('');
    $('#cell-8').text('');
    $('#cell-9').text('');
}

  function draw() {
  	alert('Draw! Han shot first.');
  	reset();
}
  function win() {
  	alert('I highly suggest that next time, you let the wookie win...');
  	reset();
}
  function loss() {
  	alert("Rrrrr!");
  	reset();
  }
});
