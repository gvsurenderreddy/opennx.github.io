// functions
var messagePub = function(data){
	// data.subtitle = data.subtitle && data.subtitle.length > 0 ? ' - '+data.subtitle: '';

	fillMeta('.title', data.title );
	fillMeta('.subtitle', data.subtitle );
	fillMeta('.description', nl2br(data.description));
    fillMeta('.attribution', mkattrib(data));

	//console.log($('.description').height());

};


var fillMeta = function(f, t){
	var msg = $('#messaging');
	if(!t || t.length==0){
		msg.find(f).html('');
	}else{
		msg.find(f).html(t);
	}
}

var nl2br = function(str){
	var breakTag = '<br>'; 
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}


var mkattrib = function(data){
    var author = "";
    var lic = "";
    if (data.url) {
        author = "<a href='" + data.url +  "' target='_blank'>" + data.author + "</a>";
    } else {
        author = data.author;
    }

    console.log(data);
    var lic_deed;

    lic = data.rights;
    if (lic == "CC 0"){
        lic_deed = "https://creativecommons.org/publicdomain/zero/1.0/";

    } else if (lic.startsWith("CC BY") ) {
        x = lic.split(" ");
        lic_deed = "https://creativecommons.org/licenses/" + x[1] + "/" + x[2] + "/";
    }  
    

    if (lic_deed) {
        lic = "<a href='" + lic_deed.toLowerCase() +  "' target='_blank'>" + data.rights + "</a>";
    }


    var result = data.title + " by " + author + " is licensed under " + lic;
    return result

}



var _statuschanged = function(state) {
 /* if (state == PushStream.OPEN) {
   $("#footer>.status").html('NXTV 2014, using: '+pushstream.wrapper.type);
  } else {
   $("#footer").html("");
  }*/
};


var _connect = function(channel) {
  pushstream.removeAllChannels();
  try {
    pushstream.addChannel(channel);
    pushstream.connect();
  } catch(e) {
    //alert(e)
  };
}



// init
PushStream.LOG_LEVEL = 'error';

var pushstream = new PushStream({
  host: 'streamuj.tyzmr.de',
  port: 42666,
  modes: "websocket",

});

pushstream.onstatuschange = _statuschanged;
pushstream.onmessage = messagePub;

_connect('nxtv');


$(document).ready(function()
{



});