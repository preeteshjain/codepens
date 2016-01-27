(function(){

    function getRN(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var nob = getRN(400, 500);

    while(nob > 0) {

        var vpos = getRN(1, 50);
        var hpos = getRN(1, 95);
        var size = getRN(10, 75);
        var animSpeed = getRN(10, 70);

        $(".container").append("<div class='bubble bubble-size-" + size + " bubble-vpos-" + vpos + " bubble-hpos-" + hpos + " bubbling-speed-" + animSpeed + "'></div>");

        nob--;
    }

})();