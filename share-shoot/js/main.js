$(function(){
    var stateFlag = 0;
    var $ss_title = $('.share-shoot__title');
    var $ss_icons = $('.share-shoot__icons');
    
    var tl = new TimelineLite();
    tl.paused(true);
    tl.add(TweenLite.to($ss_title, 0.25, {width: "96%", textAlign: "right"}));
    tl.add(TweenLite.to($ss_icons, 0.5, {display: "inline", opacity: 1}));

    $ss_title.click(function(){
        if(stateFlag === 0) {
            tl.play();
            stateFlag = 1;
        } else {
            tl.reverse();
            stateFlag = 0;
        }
    });
});