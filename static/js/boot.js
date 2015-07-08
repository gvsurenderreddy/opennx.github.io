var tvSchedule = function(){
    var dataPath = 'http://data.nxtv.cz/public/nx/schedule/nx.schedule.html';

    $.ajax({
        type: "GET",
        url: dataPath,
        dataType: 'html',
        crossDomain: true,
        async: true,
        cache: false,
        error: function(jqXHR, textStatus, errorThrown){
            //console.log(jqXHR, textStatus, errorThrown);
        },
        success: function(r){      
            $('#schedule').html(r);   

            setTimeout( function(){
                tvSchedule();
            }, 60000);

            //console.log(r);
        }
    });
}


$(document).ready(function() {

    $('body').removeClass('loading');

    var vConf = [
        [512,288],
        [640,360],
        [960,540],
        [1024,576],
        [1280,720]
    ];

    var TV = {
        playback: false,
        playPause : $('.playPause')
    };

    var TVInit = function(){

        var playerSwf = {
            player: 'nxtv',
            skin: 'nxtv_skin'
        }

        var f4v = $('<object id="f4Player" width="960" height="540" type="application/x-shockwave-flash" data="/static/swf/'+playerSwf.player+'.swf?v1.3.5">' +
        '  <param name="movie" value="/static/sff/'+playerSwf.player+'.swf?v1.3.5" /> '+
        '  <param name="quality" value="high" /> '+
        '  <param name="menu" value="false" /> '+
        '  <param name="scale" value="noscale" /> '+
        '  <param name="allowfullscreen" value="true"> '+
        '  <param name="wmode" value="opaque">'+
        '  <param name="allowscriptaccess" value="always"> '+
        '  <param name="swlivevonnect" value="true" /> '+
        '  <param name="cachebusting" value="false"> '+
        '  <param name="flashvars" value="skin=/static/swf/'+playerSwf.skin+'.swf&streamname=nxtv&stream=rtmp://streamuj.tyzmr.de/streams/&live=1&autoplay=1"/> '+
        '  <a href="http://www.adobe.com/go/flashplayer/">Download it from Adobe.</a> '+
        '  <a href="http://gokercebeci.com/dev/f4player" title="flv player">flv player</a> '+
        ' </object>');


        $('#nplayer').html(f4v);

    }


    TVInit();
    tvSchedule();

});
