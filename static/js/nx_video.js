    function start_video(dash_url, rtmp_url) {

        if (!!!(window.MediaSource || window.WebKitMediaSource)) {

            $("#dash_video_player").remove();
            $("#video_container").append("<div id='flash_video_player'></div>")

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
    
        } else { // END Flash fallback. START DASH

            //TODO: Load dash.js here instead imlicit loading

            video = document.querySelector("#dash_video_player");
            context = new Dash.di.DashContext();
            player = new MediaPlayer(context);

            player.startup();
            player.attachView(video);
            player.setAutoPlay(true);
            player.attachSource(dash_url); 

        } // end DASH
    } // end function start_video()



    $(document).ready(function() {
        start_video(
            'http://streamuj.tyzmr.de:42666/dash/nx_high.mpd',
            'rtmp://streamuj.tyzmr.de/nxtv/nx_high'
            );
    }); // end $(document).ready(function({