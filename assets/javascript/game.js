$(document).ready(function() {
    let winCounter = 0;
    let lossCounter = 0;
    let score = 0;
    let number = Math.floor((Math.random() * 102) + 19);
    console.log(number);
    let red = Math.floor((Math.random() * 12) + 1);
    let blue = Math.floor((Math.random() * 12) + 1);
    let yellow = Math.floor((Math.random() * 12) + 1);
    let green = Math.floor((Math.random() * 12) + 1);


    $("#numberToMatch").html(number);
    console.log(number);

    $("#redCrystal").click(function() {
        update(red);
    })


    $("#blueCrystal").click(function() {
        update(blue);
    });

    $("#yellowCrystal").click(function() {
        update(yellow);
    });

    $("#greenCrystal").click(function() {
        update(green);
    });

    function reset() {
        score = 0;
        number = Math.floor((Math.random() * 102) + 19);

        $("#numberToMatch").html(number);

        red = Math.floor((Math.random() * 12) + 1);
        blue = Math.floor((Math.random() * 12) + 1);
        yellow = Math.floor((Math.random() * 12) + 1);
        green = Math.floor((Math.random() * 12) + 1);

        $("#totalScore").html(score);
    };

    function update(crystal) {
        score += crystal;
        $("#totalScore").empty();
        $("#totalScore").append(score);

        if (score > number) {
            lossCounter++;
            $("#losses").html(lossCounter);
            $("#winLose").html("You Lose!!!");

            reset();
        } else if (score === number) {
            winCounter++;
            $("#win").html(winCounter);
            $("#winLose").html("You Win !!!");
            reset();
        }
    };
});