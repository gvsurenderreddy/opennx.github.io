function start_stream(stream_url, target){
    var player = document.getElementById(target);
    if(Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(stream_url);
        hls.attachVideo(player);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
                player.play();
        });
     } else {

        // TODO: Fallback


     } // HLS is not supported
} // function start_stream()


function update_schedule(data_path, target){
    $.ajax({
        type: "GET",
        url: data_path,
        dataType: 'html',
        crossDomain: true,
        async: true,
        cache: false,
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
        },
        success: function(r){      
            $(target).html(r);   
            setTimeout( function(){
                update_schedule();
            }, 60000);
        }
    });
}


$(document).ready(function() {
    var schedule_target = "#schedule";
    var schedule_path   = "http://data.nxtv.cz/public/nx/schedule/nx.schedule.html";
    var stream_path     = "http://tranquility.immstudios.org/nxtv.m3u8";    

    $('body').removeClass('loading');
    
    update_schedule(schedule_path, schedule_target);
    start_stream(stream_path, "nplayer");
});
