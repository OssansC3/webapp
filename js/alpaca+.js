var endpoint = 'http://192.168.100.10:8080/alpaca_c3/api';

// id=like をクリックした際の処理を定義する
$('#like').click(function() {

	// API呼び出し
	$.ajax({
		url: 'http://192.168.100.10:8080/alpaca_c3/api/report',
		success: function(xml){
			$('#total').text($('total_like', xml).text());
		}
	});
});


$('#submit').click(function() {
	// API呼び出し
	$.ajax({
		url: 'http://192.168.100.10:8080/alpaca_c3/api/comment',
		data: {msg: $('#message').val() },
		success: function(xml){reloadMessage(xml);},
		error: function(xhr,status,error){}
	});
});

function reloadMessage(xml){
	var comment = $('comment', xml);
	console.log(xml);
	comment.each(function(){
		var message = $('message', $(this));
		$('#board').append('<p>'+message.text()+'</p>');
		$('#board').append('<p>nyan</p>');
	});



};
