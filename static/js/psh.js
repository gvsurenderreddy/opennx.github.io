// functions
var messagePub = function(data){
	// data.subtitle = data.subtitle && data.subtitle.length > 0 ? ' - '+data.subtitle: '';

	fillMeta('.title', data.title );
	fillMeta('.subtitle', data.subtitle );
	fillMeta('.description', nl2br(data.description));

	//console.log($('.description').height());

	if($('.description').height()>60){
		$('.expand').show();
	}else{
		$('.expand').hide();
	}
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