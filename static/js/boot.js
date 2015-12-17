function start_stream(){

    var player = $('#player').julia({
        autoplay: true,
        muted: false,
        responsive: true,
        debug: false,
        live: true,
        pauseOnClick : true,
        dimensions: [
            [1280,720],
            [960,540],
            [640,360],
        ],
        i18n: {
            liveText: '',
        }
    });

}


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



function update_events(){

}




$(document).ready(function() {
    var schedule_target = "#schedule";
    var schedule_path   = "http://data.nxtv.cz/public/nx/schedule/nx.schedule.html";

    $('body').removeClass('loading');
    
    update_schedule(schedule_path, schedule_target);
    start_stream();
});
