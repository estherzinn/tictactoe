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

      function randomizer() {
				var Found = false;
				while(Found != true) {
					var Random = Math.floor(Math.random() * 9) + 1;

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
      				$('div#cell-1').css('background-image', 'none');
      				$('div#cell-2').css('background-image', 'none');
      				$('div#cell-3').css('background-image', 'none');
      				$('div#cell-4').css('background-image', 'none');
      				$('div#cell-5').css('background-image', 'none');
      				$('div#cell-6').css('background-image', 'none');
      				$('div#cell-7').css('background-image', 'none');
      				$('div#cell-8').css('background-image', 'none');
      				$('div#cell-9').css('background-image', 'none');
      				count = 0;
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
      				alert("Rrrra!");
      				reset();
      			}
})
