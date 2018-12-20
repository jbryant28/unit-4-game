$( document ).ready(function(){
  var ran = Math.floor(Math.random() * 101 + 19);
  $("#randomNumber").text(ran);
  var num1 = Math.floor(Math.random() * 11 + 1);
  var num2 = Math.floor(Math.random() * 11 + 1);
  var num3 = Math.floor(Math.random() * 11 + 1);
  var num4 = Math.floor(Math.random() * 11 + 1);
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);

  function reset() {
    ran = Math.floor(Math.random() * 101 + 19);
    console.log(ran)
    $("#randomNumber").text(ran);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);

  }

  
  
  $("#one").on("click", function () {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal === random) {
      win();
    }
    else if (userTotal > random) {
      lose();
    }
  });


  $("#two").on("click", function () {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal === random) {
      win();
    }
    else if (userTotal > random) {
      lose();
    }
  });

  $("#three").on("click", function () {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal === random) {
      win();
    }
    else if (userTotal > random) {
      lose();
    }
  });

  $("#four").on("click", function () {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal === random) {
      win();
    }
    else if (userTotal > random) {
      lose();
    }


  });

  function win() {
    alert("You won!");
    win++;
    $("#numberWins").text(wins);
    reset()
  }
  function lose() {
    alert("You lose!");
    lose++;
    $('#numberLosses').text(losses);
    reset();
  }

  })