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

    if (!!!(window.MediaSource || window.WebKitMediaSource)) {

        $("#dash_video_player").remove();
        $("#video_container").append("<div id='flash_video_player'></div>")

        var flashvars  = {
            file: rtmp_url, 
            autoplay: true, 
            mode: 'overlay', 
            poster: "/static/img/loading.gif",
            link: '',
            embed: ''
            };
        
        var params     = {
            allowFullScreen: 'true',
            bgcolor:'#000000',
            wmode:'transparent',
            allowScriptAccess:'always',
            };



        var attributes = {
            id: 'nx_player', 
            name: 'nx_player'
            };

        swfobject.embedSWF(
            '/static/swf/flashmediaelement.swf', 
            'flash_video_player', 
            '960', '540', 
            '9.0.0', 
            '/static/swf/expressInstall.swf', 
            flashvars, 
            params, 
            attributes
            );

        playback_mode = "flash";

    } else { // END Flash fallback. START DASH

        video   = document.querySelector("#dash_video_player");
        context = new Dash.di.DashContext();
        player  = new MediaPlayer(context);

        player.startup();
        player.attachView(video);
        player.setAutoPlay(true);
        player.attachSource(dash_url); 

        playback_mode = "dash";

    } // end DASH
} // end function start_video()



$( document ).ready(function() {

    start_video(
        'http://streamuj.tyzmr.de:42666/dash/nx_high.mpd',
        'rtmp://streamuj.tyzmr.de/nxtv/nx_high'
        );

    $("#dash_video_player").on('play', function(){

        $("#background").replaceWith('<canvas id="background" width="32" height="18">New heading</h2>');
        
        var canvas = document.getElementById('background');
        var cw = Math.floor(canvas.width);
        var ch = Math.floor(canvas.height);
        var bkg_context = canvas.getContext('2d');
        draw(this, bkg_context, cw, ch);

    });

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




}); // document ready
