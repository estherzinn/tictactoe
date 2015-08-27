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
})
