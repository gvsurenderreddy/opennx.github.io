var playback_mode = false;

function draw(v, c, w, h) {
    if(v.paused || v.ended) return false;
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
}


function get_flash(movieName){
    if (window.document[movieName]) {
        return window.document[movieName];
    }
    if (navigator.appName.indexOf("Microsoft Internet")==-1)
        {
    if (document.embeds && document.embeds[movieName])
        return document.embeds[movieName]; 
    }
    else {
    return document.getElementById(movieName);
    }
}





function start_video(dash_url, rtmp_url) {

    var flashvars  = {
        src: rtmp_url, 
        autostart: 'true', 
        themeColor: '0395d3', 
        mode: 'overlay', 
        scaleMode: 'native', 
        frameColor: '000000', 
        fontColor: '333333', 
        link: '',
        embed: ''
        };
    
    var params     = {
        allowFullScreen: 'true'
        };

    var attributes = {
        id: 'nx_player', 
        name: 'nx_player'
        };

    swfobject.embedSWF(
        '/static/swf/AkamaiFlashPlayer.swf', 
        'flash_video_player', 
        '966', '546', 
        '9.0.0', 
        '/static/swf/expressInstall.swf', 
        flashvars, 
        params, 
        attributes
        );


} // end function start_video()



$( document ).ready(function() {

    start_video(
        'http://streamuj.tyzmr.de:42666/dash/nx_high.mpd',
        'rtmp://streamuj.tyzmr.de/nxtv/nx_high'
        );

    $("#btn_mute").click(function() {

        if (playback_mode == "dash"){
            if( $("#dash_video_player").prop('muted') ) {
                $("#dash_video_player").prop('muted', false);
                $("#btn_mute").html('<i class="fa fa-volume-up"></i>');
            } else {
                $("#dash_video_player").prop('muted', true);
                $("#btn_mute").html('<i class="fa fa-volume-off"></i>');
            }
        }else if (playback_mode == "flash"){

            var flash = get_flash("nx_player");
            if (flash.getVolume == 0){
                flash.setMuted(false);    
                $("#btn_mute").html('<i class="fa fa-volume-up"></i>');
            }else{
                flash.setMuted(true);
                $("#btn_mute").html('<i class="fa fa-volume-off"></i>');
            }

        }

    }); // mute video


    $("#btn_fullscreen").click(function(){
        var element = document.getElementById("dash_video_player");       
        if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
        }  
    }); //full screen


}); // document ready
