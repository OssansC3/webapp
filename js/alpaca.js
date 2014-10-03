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
		url: 'http://192.168.100.10:8080/alpaca_c3/api/message',
		data: {message: $("#message").text() },
		success: function(xml){
				$message = $('#message');
				message.each(function(){
				$('#board').append('<p>'+$this.text()+'</p>');
	});
		}
	});
});

function reloadMessage(xml){
	$message = $('#message');
	message.each(function(){
		$('#board').append('<p>'+$this.text()+'</p>');
	});

};
